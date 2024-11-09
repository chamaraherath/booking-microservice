import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GatewayReference } from './array/gateway.array';
import { Deceased } from './array/deceased.array';
import { Catering } from './array/catering.array';
import { Cremation } from './array/cremation.array';
import { Chapel } from './array/chapel.array';
import { BurialOrCRPlacement } from './array/burial-cr-placement.array';
import { Appointment } from './array/appointment.array';

@Schema()
export class Booking {

    _id: string;

    @Prop()
    id: string;

    @Prop()
    bookingReference: string;

    @Prop()
    bookingSaleId: string;

    @Prop()
    date: string;

    @Prop()
    status: string;

    @Prop()
    siteId: string;

    @Prop()
    transactionTypeId: string;

    @Prop()
    locationId: string;

    @Prop()
    funeralCompanyId: string;

    @Prop()
    recordType: string;

    @Prop()
    tmStatus: string;

    @Prop()
    deceased: Deceased;

    @Prop()
    catering: Catering;

    @Prop()
    cremation: Cremation;

    @Prop()
    chapel: Chapel;

    @Prop()
    burialOrCRPlacement: BurialOrCRPlacement;

    @Prop()
    appointments: Appointment[];

    @Prop()
    requestReference: GatewayReference;
    
    @Prop()
    orgId: string;
    
    @Prop()
    createdBy: string;
    
    @Prop()
    updatedBy: string;

}

export const BookingSchema = SchemaFactory.createForClass(Booking);