import { ApiStatus } from "src/util/response.message";
import { UtilManager } from "src/util/utility";

export class KafkaSuccessResponse {

    constructor(
        private readonly message: any,
        private readonly status: number,
        private readonly payload = {},
        private readonly apiStatus: string = ApiStatus.ON_QUEUED) { }

    toString() {
        return JSON.stringify({
            message: this.message,
            payload: {
                payload: this.payload,
                received_at: UtilManager.getCurrentTime(),
                status: this.apiStatus,
                request_id: UtilManager.getRandomString
            },
            status: this.status,
        });
    }
}

export class KafkaErrorResponse {

    constructor(
        private readonly message: string,
        private readonly status: number,
        private readonly payload = {},
        private readonly fields: [],
        private readonly apiStatus: string = ApiStatus.ON_QUEUED
    ) { }

    toString() {
        return UtilManager.toJsonStringify(
            {
                message: this.message,
                payload: {
                    payload: this.payload,
                    received_at: UtilManager.getCurrentTime(),
                    status: this.apiStatus,
                    request_id: UtilManager.getRandomString
                },
                status: this.status,
                fields: this.fields
            }
        );
    }
}

export enum ErrorMessage {
    UNAUTHORIZED = 'Unauthorized', //The request requires user authentication.
    FORBIDDEN = 'Forbidden', //The server understands the request, but it refuses to authorize it.
    INVALID_TOKEN = 'Invalid Token', //An expired or otherwise invalid token was provided with the request.
    BAD_REQUEST = 'Bad Request', //The request could not be understood or was missing required parameters.
    NOT_FOUND = 'Not Found', //The requested resource could not be found on the server.
    METHOD_NOT_ALLOWED = 'Method Not Allowed', //The requested resource could not be found on the server.
    NOT_ACCEPTABLE = 'Not Acceptable', //The requested resource could not be found on the server.
    REQUEST_TIMEOUT = 'Request Timeout', //The server timed out waiting for the request.
    INTERNAL_SERVER_ERROR = 'Internal Server Error', //An error occurred on the server.
    BAD_GATEWAY = 'Bad Gateway', //The server received an invalid response from the upstream server while attempting to fulfill the request.
    SERVICE_UNAVAILABLE = 'Service Unavailable', //The server is temporarily unavailable, usually due to maintenance or overload.
    TOKEN_EXPIRED = 'Token expired', //The server is temporarily unavailable, usually due to maintenance or overload.
    TOKEN_REQUIRED = 'Token Required', //The server is temporarily unavailable, usually due to maintenance or overload.
}