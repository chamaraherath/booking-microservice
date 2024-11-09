import { Callback } from "../dto/callback/callback.dto";
import { Request as ClientRequest } from "../dto/callback/request";

export class BookingCallbackParser {
    private callback: Callback;
    constructor() {
        this.callback = new Callback();
        this.callback.request = new ClientRequest()
    }

    setPayload(payload: any = []) {
        let requestedPayload = payload;
        let reference = payload.requestReference;
        delete requestedPayload['requestReference'];
        this.callback.request.payload = requestedPayload;
        this.callback.entity = 'Booking';
        this.callback.request.method = reference.method;
        this.callback.request.accepted_at = reference.received_at;
        this.callback.request.headers = reference.headers;
        this.callback.request.job_reference = reference.job_reference;
        return this;
    }

    setErrors(errors: any = []) {
        this.callback.request.request_errors = errors;
        return this;
    }

    setStatus(success: boolean) {
        this.callback.request.success = success;
        return this;
    }

    build() {
        return this;
    }

    get() {
        return this.callback;
    }
}