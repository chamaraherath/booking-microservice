export interface Builder {
    apply(payload: any);
    build(): any;
}