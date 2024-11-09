import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
    // BadRequestException: Represents a 400 Bad Request error response.
    constructor(message: any, errorCode: number, statusCode: HttpStatus) {

        super({ message, errorCode }, statusCode);
    }
}