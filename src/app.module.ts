import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookingModule } from './booking/booking.module';

@Module({
    imports: [ConfigModule.forRoot(), 
        BookingModule
    ],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule {
    constructor() { }
}