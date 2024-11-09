import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Booking } from "../model/booking.entity";
import { Territory } from "../model/territory.entity";
import { TransactionType } from "../model/transaction-type.entity";
import { BookingStatus } from "../model/booking-status.entity";
import { SiteResource } from "../model/site-resource.entity";
import { FieldLibrarySelectionInputValue } from "../model/field-library-selection-input-value.entity";
import { FieldLibrary } from "../model/field-library.entity";
import { BookingResourceAllocation } from "../model/booking-resource-allocation.entity";
import { FdMapping } from "../model/fd-mapping.entity";
import { CompanySitePermission } from "../model/company-site-permission.entity";

@Injectable()
export class SqlQueryBuilder {
    constructor(
        @InjectRepository(Booking) private readonly bookingRepository: Repository<Booking>,
        @InjectRepository(Territory) private readonly territoryRepository: Repository<Territory>,
        @InjectRepository(TransactionType) private readonly transactionTypeRepository: Repository<TransactionType>,
        @InjectRepository(BookingStatus) private readonly bookingStatusRepository: Repository<BookingStatus>,
        @InjectRepository(SiteResource) private readonly siteResourceRepository: Repository<SiteResource>,
        @InjectRepository(FieldLibrary) private readonly fieldLibraryValueRepository: Repository<FieldLibrary>,
        @InjectRepository(FieldLibrarySelectionInputValue) private readonly fieldLibrarySelectionInputValueRepository: Repository<FieldLibrarySelectionInputValue>,
        @InjectRepository(BookingResourceAllocation) private readonly bookingResourceAllocationRepository: Repository<BookingResourceAllocation>,
        @InjectRepository(FdMapping) private readonly fdMappingRepository: Repository<FdMapping>,
        @InjectRepository(CompanySitePermission) private readonly companySitePermissionRepository: Repository<CompanySitePermission>
    ) { }

    async getBookingBy(param: any): Promise<Booking> {
        try {
            return await this.bookingRepository.findOne(param);
        } catch (error) {
            throw error;
        }
    }

    async getTerritoryBy(param: any): Promise<Territory> {
        try {
            return await this.territoryRepository.findOne(param);
        } catch (error) {
            throw error;
        }
    }

    async getTransactionTypeBy(param: any): Promise<TransactionType> {
        try {
            return await this.transactionTypeRepository.findOne(param);
        } catch (error) {
            throw error;
        }
    }

    async getBookingStatusBy(param: any): Promise<BookingStatus> {
        try {
            return await this.bookingStatusRepository.findOne(param);
        } catch (error) {
            throw error;
        }
    }

    async getSiteResourceBy(param: any): Promise<SiteResource> {
        try {
            return await this.siteResourceRepository.findOne(param);
        } catch (error) {
            throw error;
        }
    }

    async getFieldLibraryValueBy(param: any): Promise<FieldLibrary> {
        try {
            return await this.fieldLibraryValueRepository.findOne(param);
        } catch (error) {
            throw error;
        }
    }

    async getFieldLibrarySelectionInputValueBy(param: any): Promise<FieldLibrarySelectionInputValue> {
        try {
            return await this.fieldLibrarySelectionInputValueRepository.findOne(param);
        } catch (error) {
            throw error;
        }
    }

    async getfdMappingValueBy(param: any): Promise<FdMapping> {
        try {
            return await this.fdMappingRepository.findOne(param);
        } catch (error) {
            throw error;
        }
    }

    async getCompanySitePermissionValueBy(param: any): Promise<CompanySitePermission> {
        try {
            return await this.companySitePermissionRepository.findOne(param);
        } catch (error) {
            throw error;
        }
    }

    async deleteBookingById(reference: string) {
        try {
            let booking = await this.bookingRepository.findOneBy({ reference_id: reference });

            if (booking == null) {
                throw new NotFoundException(`The booking [${reference}] not found.`);
            }

            this.bookingRepository.update(booking.id, { deleted_at: new Date() });
            this.bookingResourceAllocationRepository.update({ booking_id: booking.id }, { deleted_at: new Date() });
            return booking;
        } catch (error) {
            throw error;
        }
    }
}