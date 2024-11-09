import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
@Injectable()
export abstract class BaseAbstractRepository<T> {

  constructor(private readonly model: Model<T>) {
  }

  protected async findAll(): Promise<T[]> {
    return await this.model.find().exec();
  }

  protected async findById(id: string): Promise<T> {
    return await this.model.findById(id).exec();
  }

  protected async create(item: any): Promise<T> {
   try{
    return this.model.create(item);
   }catch(e){
    throw new Error(e);
   }
  }

  protected async update(id: string, item: T): Promise<T> {
    return await this.model.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  protected async delete(id: string): Promise<T> {
    return await this.model.findByIdAndRemove(id).exec();
  }

  findWithRelations(relations: T): Promise<T[]> {
    throw new Error('Method not implemented.');
}

}