export interface DataService<T> {
    get(id: string): Promise<T | null>;
    create(entity: T): Promise<T>;
    update(id: string, array: any): Promise<T>;
    delete(id: string): Promise<void>;
    find(param: any): Promise<T[]>;
    count(): Promise<Number>;
    queryBuild(param);
    aggregate(param);
}