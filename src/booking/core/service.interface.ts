import { BookingDto } from "../dto/booking-post.dto";
import { KafkaSuccessResponse } from "../helper/response.helper";
import { Booking } from "../database/nosql/model/booking.schema";

/**
 * This interface use for sync request
 */
export interface SyncInterface {
    /**
     * 
     * @param payload 
     * @returm Promise<HttpSuccessResponse>
     * This method is intended for creating a new booking entity
     */
    doPost(payload: BookingDto): Promise<Booking>;
    
    /**
     * 
     * @param id 
     * @param payload 
     * @return Promise<KafkaSuccessResponse>
     * This method is intended for update a new booking entity
     */
    doUpdate(payload: any, id: string): Promise<Booking>;

    /**
     * 
     * @param id 
     * @return Promise<KafkaSuccessResponse>
     * TThis method is intended for get or delete a new booking entity
     */
    doDelete(id: number): Promise<Object>;

    /**
     * 
     * @param id 
     * @return Promise<KafkaSuccessResponse>
     * TThis method is intended for get booking entity by id
     */
    doGet(id: number): Promise<KafkaSuccessResponse>;

    /**
     * 
     * @param id 
     * @return Promise<KafkaSuccessResponse>
     * TThis method is intended for get booking entity by id
     */ 
     doGetAll(param: any): Promise<KafkaSuccessResponse>;
}

/**
 * This interface use for async request
 */
export interface AsyncInterface {
    /**
     * 
     * @param payload 
     * This method is intended for creating a new booking entity
     */
    doPost(payload: BookingDto);

    /**
     * 
     * @param id 
     * @param payload 
     * This method is intended for update a new booking entity
     */
    doUpdate(payload: any, id: string);

    /**
     * 
     * @param id 
     * TThis method is intended for get or delete a new booking entity
     */
    doDelete(payload: any);

    /**
     * 
     * @param id 
     * TThis method is intended for get booking entity by id
     */
    doGet(id: number);

    /**
     * 
     * @param id 
     * TThis method is intended for get booking entity by id
     */
    doGetAll(param: any);
}