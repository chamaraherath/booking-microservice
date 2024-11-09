import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
    // NotFoundException: Represents a 404 Not Found error response.
    constructor(message: string, errorCode: number, statusCode: HttpStatus) {
        super({ message, errorCode }, statusCode);
    }
}