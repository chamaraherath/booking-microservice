import { HttpException, HttpStatus } from '@nestjs/common';

export class InternalServerErrorException extends HttpException {
    // InternalServerErrorException: Represents a 500 Internal Server Error response.
    constructor(message: string, errorCode: number, statusCode: HttpStatus) {
        super({ message, errorCode }, statusCode);
    }
}