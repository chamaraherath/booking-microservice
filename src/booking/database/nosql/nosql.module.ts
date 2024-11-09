import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { Booking, BookingSchema } from "./model/booking.schema";
import { NoSqlService } from "./service/nosql.service";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                uri: config.get<string>('MONGODB_URL'), // Loaded from .ENV
            })
        }),
        MongooseModule.forFeature([
            { name: Booking.name, schema: BookingSchema },
        ]),
    ],
    providers: [
        {
            provide: 'NoSqlService',
            useClass: NoSqlService
        },
    ],
    exports: [
        {
            provide: 'NoSqlService',
            useClass: NoSqlService
        },
    ],
})
export class NoSqlModule { }