import { Controller, Inject, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AsyncInterface } from '../core/service.interface';
import { BookingDto } from '../dto/booking-post.dto';
import { Topics } from '../util/topics.enum';

@Controller()
export class AsyncController {

    private readonly logger = new Logger(AsyncController.name);

    constructor(@Inject("BookingService") private readonly bookingService: AsyncInterface) {

    }

    /**
     * 
     * @param dto
     */
    @EventPattern(Topics.BOOKING_CREATING)
    async post(@Payload() dto: BookingDto) {
        try {
            this.logger.debug('----------------------------------------------------');
            this.logger.debug(`method      : ${dto.requestReference.method}`);
            this.logger.debug(`mode        : ${dto.requestReference.headers.mode}`);
            this.logger.debug(`job id      : ${dto.requestReference.job_reference}`);
            this.logger.debug(`accepted at : ${dto.requestReference.received_at}`);
            this.logger.debug(`callback URL: ${dto.requestReference.headers['callback-url']}`);
            this.logger.debug('----------------------------------------------------');
            await this.bookingService.doPost(dto);
        } catch (error) {
            throw error;
        }
    }

    /**
     * 
     * @param dto
     */
    @EventPattern(Topics.BOOKING_UPDATING)
    async put(@Payload() payload: any) {
        this.logger.debug('----------------------------------------------------');
        this.logger.debug(`method      : ${payload.payload.requestReference.method}`);
        this.logger.debug(`mode        : ${payload.payload.requestReference.headers.mode}`);
        this.logger.debug(`job id      : ${payload.payload.requestReference.job_reference}`);
        this.logger.debug(`accepted at : ${payload.payload.requestReference.received_at}`);
        this.logger.debug(`callback URL: ${payload.payload.requestReference.headers['callback-url']}`);
        this.logger.debug('----------------------------------------------------');
        this.bookingService.doUpdate(payload.payload, payload.reference);
    }

    /**
     * 
     * @param payload 
     */
    @EventPattern(Topics.BOOKING_DELETING)
    async delete(@Payload() payload: any) {
        this.logger.debug('----------------------------------------------------');
        this.logger.debug(`method      : ${payload.payload.requestReference.method}`);
        this.logger.debug(`mode        : ${payload.payload.requestReference.headers.mode}`);
        this.logger.debug(`job id      : ${payload.payload.requestReference.job_reference}`);
        this.logger.debug(`accepted at : ${payload.payload.requestReference.received_at}`);
        this.logger.debug(`callback URL: ${payload.payload.requestReference.headers['callback-url']}`);
        this.logger.debug('----------------------------------------------------');
        this.bookingService.doDelete(payload);
    }
}