import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidArgumentException extends HttpException {
    constructor(message: string, errorCode: number, statusCode: HttpStatus) {
        super({ message, errorCode }, statusCode);
    }
}