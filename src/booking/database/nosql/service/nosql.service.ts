import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DataService } from "../../service.interface";
import { Booking } from "../model/booking.schema";

@Injectable()
export class NoSqlService implements DataService<Booking>{

    constructor(@InjectModel(Booking.name) private readonly model: Model<Booking>) {

    }

    aggregate(param: any) {
        try {
            return this.model.aggregate(param);
        } catch (error) {
            throw new Error(error);
        }
    }

    queryBuild(param) {
        try {
            return this.model.find(param);
        } catch (error) {
            throw new Error(error);
        }
    }

    async count(): Promise<Number> {
        try {
            return await this.model.countDocuments();
        } catch (error) {
            throw new Error(error);
        }
    }

    async get(id: string): Promise<Booking> {
        try {
            return await this.model.findById(id).exec();
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(entity: Booking): Promise<Booking> {
        try {
            return await this.model.create(entity);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id: string, array: any): Promise<Booking> {
        try {
            return await this.model.findByIdAndUpdate(id, array).exec();
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id: string): Promise<void> {
        try {
            return await this.model.remove(id).exec();
        } catch (error) {
            throw new Error(error);
        }
    }

    async find(param: any): Promise<Booking[]> {
        try {
            return await this.model.find(param).exec();
        } catch (error) {
            throw new Error(error);
        }
    }
}