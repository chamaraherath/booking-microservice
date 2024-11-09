import { HttpException, HttpStatus } from '@nestjs/common';

export class UnprocessableEntityException extends HttpException {
    // UnprocessableEntityException: Represents a 422 Unprocessable Entity error response.
    constructor(message: string, errorCode: number, statusCode: HttpStatus) {
        super({ message, errorCode }, statusCode);
    }
}