import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sample, SampleSchema } from './model/sample.entity';
import { SampleService } from './service/sample.service';
import { SampleController } from './sample.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
@Module({
    imports:[
      MongooseModule.forFeature([
        { name: Sample.name, schema: SampleSchema },
      ]),
      MongooseModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (config: ConfigService) => ({
          uri: config.get<string>('MONGODB_URL'), // Loaded from .ENV
        })
      })
    ],
    providers:[SampleService],
    controllers: [SampleController],
    exports:[]
})
export class SampleModule {
}
