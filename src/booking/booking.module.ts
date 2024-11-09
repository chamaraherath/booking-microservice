import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionHandler } from 'src/exception/global';
import { BookingKafkaModule } from 'src/module/kafka.module';
import { AsyncController } from './controller/async.controller';
import { DatabaseModule } from './database/database.module';
import { CallbackService } from './service/callback.service';
import { BookingService } from './service/booking.service';

@Module({
    imports: [
        DatabaseModule,
        BookingKafkaModule
    ],
    controllers: [AsyncController],
    providers: [
        {
            provide: 'BookingService',
            useClass: BookingService
        },
        {
            provide: APP_FILTER,
            useClass: GlobalExceptionHandler,
        },
        CallbackService
    ]
})
export class BookingModule { }
