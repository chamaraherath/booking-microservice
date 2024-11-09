import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
    // ForbiddenException: Represents a 403 Forbidden error response.
    constructor(message: string, errorCode: number, statusCode: HttpStatus) {
        super({ message, errorCode }, statusCode);
    }
}