import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SampleService } from './service/sample.service';
import { Topics } from './util/topics.enum';
/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
@Controller('sample')
export class SampleController {

    constructor(private readonly sampleService: SampleService) { }

    /**
     * 
     * @param payload 
     */
    @EventPattern(Topics.SAMPLE_CREATED)
    async post(@Payload() payload: any) {
      this.sampleService.createSample(payload);
    }

    /**
     * 
     * @param payload
     */
    async put(@Payload() payload: any) {
     
    }

    /**
     * 
     * @param payload 
     */
    async update(@Payload() payload: any) {
     
    }

    /**
     * 
     * @param payload 
     */
    async delete(@Payload() payload: any) {
     
    }

    /**
     * 
     * @param payload 
     */
    async get(@Payload() payload: any) {
     
    }

      /**
     * 
     * @param payload 
     */
      async index(@Payload() payload: any) {
     
      }
}
