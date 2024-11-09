import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';

export type SampleDocument = HydratedDocument<Sample>;

@Schema()
export class Sample{

 
  @Prop()
  personId: number;

  @Prop()
  eRPCustomerNumber: string;

  @Prop()
  reference: string;

  @Prop()
  firstName: string;

  @Prop()
  middle: string;

  @Prop()
  lastName: string;

  @Prop()
  type: string;

  @Prop()
  active: boolean;

  @Prop()
  status: string;

  @Prop()
  deleted: number;

  @Prop({ type: () => ({
    addressId: Number,
    address1: String,
    address2: String,
    address3: String,
    address4: String,
    active: String,
    city: String,
    country: String,
    state: String,
    postCode: String,
    deleted: Number,
  })})
  primaryAddressId: {
    addressId: number;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    active: string;
    city: string;
    country: string;
    state: string;
    postCode: string;
    deleted: number;
  };

  @Prop()
  phones: [
    {
      phoneId: number;
      areaCode: string;
      phoneNumber: string;
      Type: string;
      deleted: boolean;
    }
  ];

  @Prop()
  emails: [
    {
      emailId: number;
      emailAddress: string;
      Type: string;
      deleted: boolean;
    }
  ];

  @Prop()
  relationships: [
    {
      relatedEntityDataId: number;
      person1Id: {
        personId: number;
        eRPCustomerNumber: string;
        reference: string;
        firstName: string;
        middle: string;
        lastName: string;
        status: string;
      };
      person2Id: {
        personId: number;
        eRPCustomerNumber: string;
        reference: string;
        firstName: string;
        middle: string;
        lastName: string;
        status: string;
      };
      relationship: {
        relationshipId: number;
        childRelationshipCode: string;
        parentRelationshipCode: string;
      };
      deleted: boolean;
    }
  ]
}

export const SampleSchema = SchemaFactory.createForClass(Sample);