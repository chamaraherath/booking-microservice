import { Builder } from "src/booking/core/builder.interface";
import { Appointment } from "src/booking/database/nosql/model/array/appointment.array";
import { BurialOrCRPlacement } from "src/booking/database/nosql/model/array/burial-cr-placement.array";
import { Catering } from "src/booking/database/nosql/model/array/catering.array";
import { Chapel } from "src/booking/database/nosql/model/array/chapel.array";
import { Cremation } from "src/booking/database/nosql/model/array/cremation.array";
import { Deceased } from "src/booking/database/nosql/model/array/deceased.array";
import { Booking as NoSqlBooking } from "src/booking/database/nosql/model/booking.schema";
import { BookingDto } from "src/booking/dto/booking-post.dto";
import { UtilManager } from "src/util/utility";

export class BookingBuilder implements Builder {
    private booking: NoSqlBooking;
    constructor() {
        this.booking = new NoSqlBooking();
    }
    
    apply(payload: BookingDto) {
        try {
            this.booking.id = null;
            this.booking.bookingReference = payload.bookingReference;
            this.booking.bookingSaleId = payload.bookingSaleId;
            this.booking.date = UtilManager.getUTCTime(payload.date);
            this.booking.status = payload.status;
            this.booking.siteId = payload.siteId;
            this.booking.transactionTypeId = payload.transactionTypeId;
            this.booking.locationId = payload.locationId;
            this.booking.funeralCompanyId = payload.funeralCompanyId;
            this.booking.recordType = payload.recordType;
            this.booking.tmStatus = payload.tmStatus;
            this.booking.deceased = Object.assign(new Deceased(), payload.deceased);
            this.booking.catering = Object.assign(new Catering(), payload.catering);
            this.booking.cremation = Object.assign(new Cremation(), payload.cremation);
            this.booking.chapel = Object.assign(new Chapel(), payload.chapel);
            this.booking.burialOrCRPlacement = Object.assign(new BurialOrCRPlacement(), payload.burialOrCRPlacement);
            this.booking.appointments = new Array<Appointment>

            payload.appointments.forEach((appointment) => {
                this.booking.appointments.push(
                    {
                        id: null,
                        date: UtilManager.getUTCTime(appointment.date),
                        startTime: UtilManager.getUTCTime(appointment.startTime),
                        endTime: UtilManager.getUTCTime(appointment.endTime),
                        action: appointment.action,
                        siteId: appointment.siteId,
                        resourceId: appointment.resourceId
                    }
                );
            });

            this.booking.requestReference = payload.requestReference;
            this.booking.orgId = payload.orgId;
            this.booking.createdBy = payload.createdBy;
            this.booking.updatedBy = payload.updatedBy;

            return this;
        } catch (error) {
            throw Error(error);
        }
    }

    withId(id: string) {
        this.booking.id = id;
        return this;
    }

    build() {
        return this.booking;
    }
}