import { GatewayReference } from "../database/nosql/model/array/gateway.array";
import { AppointmentDto } from "./element/appointment.dto";
import { BurialOrCRPlacementDto } from "./element/burial-cr-placement.dto";
import { CateringDto } from "./element/catering.dto";
import { ChapelDto } from "./element/chapel.dto";
import { CremationDto } from "./element/cremation.dto";
import { DeceasedDto } from "./element/deceased.dto";

export class BookingDto {

    id: string;
    bookingReference: string;
    bookingSaleId: string;
    date: Date;
    status: string;
    siteId: string;
    transactionTypeId: string;
    locationId: string;
    funeralCompanyId: string;
    recordType: string;
    tmStatus: string;
    deceased: DeceasedDto;
    catering: CateringDto;
    cremation: CremationDto;
    chapel: ChapelDto;
    burialOrCRPlacement: BurialOrCRPlacementDto;
    appointments: AppointmentDto[];
    requestReference: GatewayReference;
    orgId: string;
    createdBy: string;
    updatedBy: string;

}