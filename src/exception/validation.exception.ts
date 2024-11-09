import { HttpException, HttpStatus } from '@nestjs/common';

export class ValidationException extends HttpException {
    // ValidationException: Represents an error resulting from a validation failure.
    constructor(message: string, errorCode: number, statusCode: HttpStatus) {
        super({ message, errorCode }, statusCode);
    }
}