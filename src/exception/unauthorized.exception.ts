import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedException extends HttpException {
    // UnauthorizedException: Represents a 401 Unauthorized error response.
    constructor(message: string, errorCode: number, statusCode: HttpStatus) {
        super({ message, errorCode }, statusCode);
    }
}