import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseAbstractRepository } from "src/sample/core/base.abstract.repository";
import { Sample, SampleDocument } from "../model/sample.entity";
/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
@Injectable()
export class SampleService extends BaseAbstractRepository<Sample>{

    constructor(@InjectModel(Sample.name) model: Model<SampleDocument>){
        super(model);
    }

    createSample(payload:any){
        this.create(payload);
    }
}