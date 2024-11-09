import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DataService } from "../../service.interface";
import { Booking } from "../model/booking.entity";

@Injectable()
export class SqlService implements DataService<Booking>{

    constructor(
        @InjectRepository(Booking) private readonly bookingRepository: Repository<Booking>) {

    }

    aggregate(param: any) {
        throw new Error("Method not implemented.");
    }

    queryBuild(param: any): Promise<Booking[]> {
        throw new Error("Method not implemented.");
    }

    count(): Promise<Number> {
        throw new Error("Method not implemented.");
    }

    async get(id: string): Promise<Booking> {
        throw new Error("Method not implemented.");
    }

    async create(entity: Booking): Promise<Booking> {
        try {
            return await this.bookingRepository.create(entity);
        } catch (error) {
            throw new Error(error);
        }
    }

    update(id: string, array: any): Promise<Booking> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async find(param: any): Promise<Booking[]> {
        throw new Error("Method not implemented.");
    }
}