/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
export interface BaseInterfaceRepository<T>{

  findAll(): Promise<T[]>;

  delete(id: string): Promise<T>;

  create(item: any): Promise<T>;

  findWithRelations(relations: any): Promise<T[]>

}