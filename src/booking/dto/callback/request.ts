import { RequestErrors } from "./request.errors";
import { RequestHeader } from "./request.header";

export class Request {
    headers: RequestHeader;
    accepted_at: Date;
    job_reference:string;
    method: string;
    payload: string;
    success: boolean;
    request_errors: RequestErrors[];
}