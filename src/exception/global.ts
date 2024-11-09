import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class GlobalExceptionHandler implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        console.log(exception.message);
    }
}