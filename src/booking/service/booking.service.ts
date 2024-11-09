import { ConflictException, HttpStatus, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { SyncInterface } from "../core/service.interface";
import { NoSqlService } from "../database/nosql/service/nosql.service";
import { Booking } from "../database/nosql/model/booking.schema";
import { SqlQueryBuilder } from "../database/sql/service/query-builder.service";
import { BookingDto } from "../dto/booking-post.dto";
import { BookingBuilder } from "../helper/builder/booking.build";
import { CallbackService } from "./callback.service";
import { KafkaSuccessResponse } from "../helper/response.helper";
import { HttpMethod } from "src/util/request-mapper.util";
import { InvalidArgumentException } from "src/exception/invalid-argument.exception";
import { Territory } from "../database/sql/model/territory.entity";
import { BookingCallbackParser } from "../parser/booking.callback.parser";

@Injectable()
export class BookingService implements SyncInterface {

    constructor(
        @Inject('NoSqlService') private readonly nosqlService: NoSqlService,
        @Inject('SqlQueryBuilder') private readonly sqlQueryBuilder: SqlQueryBuilder,
        private readonly callbackService: CallbackService
    ) { }

    async doPost(payload: BookingDto): Promise<Booking> {
        try {
            let sqlBooking = new BookingBuilder()
                .apply(payload)
                .build();
            let booking = await this.validateBookingEntity(sqlBooking);
            return await this.nosqlService.create(booking);
        } catch (error) {
            this.callbackService.callback(
                new BookingCallbackParser().setPayload(payload)
                    .setStatus(false)
                    .setErrors(
                        {
                            code: error.status ? error.status : 500,
                            message: error.message ? error.message : 'Internal Server Error'
                        }
                    )
                    .build()
                    .get()
            );
        }
    }

    async doUpdate(payload: any, id: string): Promise<Booking> {
        try {
            let sqlBooking = new BookingBuilder()
                .apply(payload)
                .withId(id)
                .build();
            let booking = await this.validateBookingEntity(sqlBooking);
            return await this.nosqlService.create(booking);
        } catch (error) {
            this.callbackService.callback(
                new BookingCallbackParser().setPayload(payload)
                    .setStatus(false)
                    .setErrors(
                        {
                            code: error.status ? error.status : 500,
                            message: error.message ? error.message : 'Internal Server Error'
                        }
                    )
                    .build()
                    .get()
            );
        }
    }

    async doDelete(payload: any): Promise<Object> {
        try {
            let booking = await this.sqlQueryBuilder.deleteBookingById(payload.reference);
            this.callbackService.callback(
                new BookingCallbackParser().setPayload(payload.payload)
                    .setStatus(true)
                    .build()
                    .get()
            );
            return booking;
        } catch (error) {
            this.callbackService.callback(
                new BookingCallbackParser().setPayload(payload.payload)
                    .setStatus(false)
                    .setErrors(
                        {
                            code: error.status ? error.status : 500,
                            message: error.message ? error.message : 'Internal Server Error'
                        }
                    ).
                    build().
                    get()
            );
        }
    }

    doGet(id: number): Promise<KafkaSuccessResponse> {
        throw new Error("Method not implemented.");
    }

    async doGetAll(param: any): Promise<KafkaSuccessResponse> {
        throw new Error("Method not implemented.");
    }

    async validateBookingEntity(booking: Booking): Promise<Booking> {
        let site = await this.sqlQueryBuilder.getTerritoryBy(
            {
                where: { reference_id: booking.siteId }
            }
        );

        if (site == null) {
            throw new NotFoundException(`The site [${booking.siteId}] not found.`);
        }

        if (site && site.terr_tenant_id != booking.orgId) {
            throw new InvalidArgumentException(
                `The site [${booking.siteId}] not related to the organization.`,
                HttpStatus.EXPECTATION_FAILED,
                HttpStatus.NOT_ACCEPTABLE);
        }

        if (booking.requestReference.method == HttpMethod.HTTP_PUT) {
            let bookingIfExist = await this.sqlQueryBuilder.getBookingBy(
                {
                    where: { reference_id: booking.id }
                }
            );

            if (bookingIfExist == null) {
                throw new NotFoundException(`The booking [${booking.id}] not found.`);
            }
        } else if (booking.requestReference.method == HttpMethod.HTTP_POST) {
            let getBooking = await this.sqlQueryBuilder.getBookingBy(
                {
                    where: {
                        tran_OPSSaleID: booking.bookingSaleId,
                        to_territory_id: site.terr_id,
                    }
                }
            );

            if (getBooking != null) {
                throw new ConflictException(`The booking [${booking.bookingSaleId}] already exists.`);
            }
        }

        let transactionType = await this.sqlQueryBuilder.getTransactionTypeBy(
            {
                where: { reference_id: booking.transactionTypeId }
            }
        );

        if (transactionType == null) {
            throw new NotFoundException(`The transaction type [${booking.transactionTypeId}] not found.`);
        }

        if (booking.funeralCompanyId != "") {
            let funeralCompany = await this.sqlQueryBuilder.getTerritoryBy(
                {
                    where: { reference_id: booking.funeralCompanyId }
                }
            );

            if (funeralCompany == null) {
                throw new NotFoundException(`The funeral company [${booking.funeralCompanyId}] not found.`);
            }

            let companySitePermission = await this.sqlQueryBuilder.getCompanySitePermissionValueBy(
                {
                    where: {
                        to_territory_id: funeralCompany.terr_id,
                        from_territory_id: site.terr_id
                    }
                }
            );

            if (companySitePermission == null) {
                throw new InvalidArgumentException(
                    `The site [${booking.siteId}] not given partner permission for funeral company [${booking.funeralCompanyId}].`,
                    HttpStatus.EXPECTATION_FAILED,
                    HttpStatus.NOT_ACCEPTABLE);
            }
        }

        let bookingStatus = await this.sqlQueryBuilder.getBookingStatusBy(
            {
                where: { reference_id: booking.status }
            }
        );

        if (bookingStatus == null) {
            throw new NotFoundException(`The booking status [${booking.status}] not found.`);
        }

        if (booking.deceased) {
            let screenName = 'deceased';

            let deceasedFieldsToValidate = [
                { tableFieldName: 'coffin_type', fieldName: 'coffinType', fieldValue: booking.deceased.coffinType },
                { tableFieldName: 'payment', fieldName: 'payment', fieldValue: booking.deceased.payment },
                { tableFieldName: 'service_to_be_paid_by', fieldName: 'serviceToBePaidBy', fieldValue: booking.deceased.serviceToBePaidBy },
                { tableFieldName: 'service_type', fieldName: 'serviceType', fieldValue: booking.deceased.serviceType },
                { tableFieldName: 'size_of_coffin_casket', fieldName: 'sizeOfCoffinOrCasket', fieldValue: booking.deceased.sizeOfCoffinOrCasket },
                { tableFieldName: 'status', fieldName: 'status', fieldValue: booking.deceased.status },
                { tableFieldName: 'transaction_type', fieldName: 'transactionType', fieldValue: booking.deceased.transactionType }
            ];

            for (let field of deceasedFieldsToValidate) {
                if (field.fieldValue != null && field.fieldValue.trim() != "") {
                    await this.validateFieldValue(
                        site,
                        field.tableFieldName,
                        field.fieldValue,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not found.`,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not mapped.`
                    );
                }
            }
        }

        if (booking.catering) {
            let screenName = 'catering';

            let cateringFieldsToValidate = [
                { tableFieldName: 'menu', fieldName: 'menu', fieldValue: booking.catering.menu }
            ];

            for (let field of cateringFieldsToValidate) {
                if (field.fieldValue != null) {
                    await this.validateFieldValue(
                        site,
                        field.tableFieldName,
                        field.fieldValue,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not found.`,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not mapped.`
                    );
                }
            }
        }

        if (booking.cremation) {
            let screenName = 'cremation';

            let cremationFieldsToValidate = [
                { tableFieldName: 'cremation_service_type', fieldName: 'cremationServiceType', fieldValue: booking.cremation.cremationServiceType },
                { tableFieldName: 'cremation_type', fieldName: 'cremationType', fieldValue: booking.cremation.cremationType },
                { tableFieldName: 'medical_certificate_type', fieldName: 'medicalCertificateType', fieldValue: booking.cremation.medicalCertificateType },
                { tableFieldName: 'urn_container_type', fieldName: 'urnOrContainerType', fieldValue: booking.cremation.urnOrContainerType }
            ];

            for (let field of cremationFieldsToValidate) {
                if (field.fieldValue != null) {
                    await this.validateFieldValue(
                        site,
                        field.tableFieldName,
                        field.fieldValue,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not found.`,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not mapped.`
                    );
                }
            }
        }

        if (booking.chapel) {
            let screenName = 'chapel';

            let chapelFieldsToValidate = [
                { tableFieldName: 'service_requirements', fieldName: 'serviceRequirements', fieldValue: booking.chapel.serviceRequirements }
            ];

            for (let field of chapelFieldsToValidate) {
                if (field.fieldValue != null) {
                    await this.validateFieldValue(
                        site,
                        field.tableFieldName,
                        field.fieldValue,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not found.`,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not mapped.`
                    );
                }
            }
        }

        if (booking.burialOrCRPlacement) {
            let screenName = 'burialOrCRPlacement';

            let burialFieldsToValidate = [
                { tableFieldName: 'hearse_selection', fieldName: 'hearseSelection', fieldValue: booking.burialOrCRPlacement.hearseSelection },
                { tableFieldName: 'interment_depth', fieldName: 'intermentDepth', fieldValue: booking.burialOrCRPlacement.intermentDepth },
                { tableFieldName: 'lowering_by', fieldName: 'loweringBy', fieldValue: booking.burialOrCRPlacement.loweringBy },
                { tableFieldName: 'new_grave_selection', fieldName: 'newGraveSelection', fieldValue: booking.burialOrCRPlacement.newGraveSelection }
            ];

            for (let field of burialFieldsToValidate) {
                if (field.fieldValue != null) {
                    await this.validateFieldValue(
                        site,
                        field.tableFieldName,
                        field.fieldValue,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not found.`,
                        `The booking ${screenName} ${field.fieldName} [${field.fieldValue}] not mapped.`
                    );
                }
            }
        }

        if (booking.appointments) {
            booking.appointments.forEach(async (appointment) => {
                await this.sqlQueryBuilder.getTerritoryBy(
                    {
                        where: { reference_id: appointment.siteId }
                    }
                ).then(async (appointmentSite) => {
                    if (appointmentSite != null) {
                        await this.sqlQueryBuilder.getSiteResourceBy(
                            {
                                where: { reference_id: appointment.resourceId }
                            }
                        ).then(async (appointmentResource) => {
                            if (appointmentResource != null) {
                                await this.sqlQueryBuilder.getSiteResourceBy(
                                    {
                                        where: {
                                            territory_id: appointmentSite.terr_id,
                                            reference_id: appointment.resourceId
                                        }
                                    }
                                ).then((siteResource) => {
                                    if (siteResource == null) {
                                        throw new InvalidArgumentException(
                                            `The appointment site resource [${appointment.resourceId}] not mapped.`,
                                            HttpStatus.EXPECTATION_FAILED,
                                            HttpStatus.NOT_ACCEPTABLE);
                                    }
                                });
                            } else {
                                throw new NotFoundException(`The appointment site resource [${appointment.resourceId}] not found.`);
                            }
                        });
                    } else {
                        throw new NotFoundException(`The appointment site [${appointment.siteId}] not found.`);
                    }
                });
            })
        }

        return booking;
    }

    async validateFieldValue(
        site: Territory,
        tableFieldName: string,
        referenceId: string,
        notFoundException: string,
        notMappedException: string
    ) {
        if (referenceId !== "") {
            let fieldValueExist = await this.sqlQueryBuilder.getFieldLibrarySelectionInputValueBy({
                where: { reference_id: referenceId }
            });

            if (fieldValueExist == null) {
                throw new NotFoundException(notFoundException);
            }

            let fieldValue = await this.sqlQueryBuilder.getFieldLibraryValueBy({
                where: { field_name: tableFieldName }
            });

            if (fieldValue == null) {
                throw new InvalidArgumentException(notMappedException, HttpStatus.EXPECTATION_FAILED, HttpStatus.NOT_ACCEPTABLE);
            }

            let fieldLibraryValueMapping = await this.sqlQueryBuilder.getFieldLibrarySelectionInputValueBy({
                where: {
                    territory_id: site.terr_id,
                    field_library_id: fieldValue.id,
                    reference_id: referenceId
                }
            });

            if (fieldLibraryValueMapping == null) {
                throw new InvalidArgumentException(notMappedException, HttpStatus.EXPECTATION_FAILED, HttpStatus.NOT_ACCEPTABLE);
            }
        }
    };

}