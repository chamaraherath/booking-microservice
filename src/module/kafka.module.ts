import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ClientsModule.register([{
            name: 'BOOKING-MICROSERVICE',
            transport: Transport.KAFKA,
            options: {
                client: {
                    brokers: [`${process.env.KAFKA_BROKER_HOST}:${process.env.KAFKA_BROKER_PORT}`],
                },
            },
        }]),
    ],
    exports: [ClientsModule],
})
export class BookingKafkaModule { }