export class GatewayReference {

    job_reference: string;
    method: string;
    headers: any;
    received_at: string;

    constructor(job_reference: string, method: string, headers: any, received_at: string) {
        this.job_reference = job_reference;
        this.method = method;
        this.headers = headers;
        this.received_at = received_at;
    }
}