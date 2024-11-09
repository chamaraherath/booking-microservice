import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { GlobalExceptionHandler } from './exception/global';

async function bootstrap() {

    try {
        const app = await NestFactory.createMicroservice<MicroserviceOptions>(
            AppModule,
            {
                transport: Transport.KAFKA,
                options: {
                    client: {
                        brokers: [`${process.env.KAFKA_BROKER_HOST}:${process.env.KAFKA_BROKER_PORT}`],
                    },
                    consumer: {
                        groupId: 'booking-ms-group',
                    },
                },
            },
        );
        app.useGlobalFilters(new GlobalExceptionHandler());
        app.listen();
    } catch (error) {

        console.log(error);

    }
}
bootstrap();