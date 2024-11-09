import { HttpException, HttpStatus } from '@nestjs/common';

export class ConflictException extends HttpException {
    // ConflictException: Represents a 409 Conflict error response.
    constructor(message: string, errorCode: number, statusCode: HttpStatus) {
        super({ message, errorCode }, statusCode);
    }
}