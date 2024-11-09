import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidTokenException extends HttpException {
    // ValidationException: Represents an error resulting from a validation failure.
    constructor(message: string, errorCode: number, statusCode: number) {
        super({ message, errorCode }, statusCode);
    }
}