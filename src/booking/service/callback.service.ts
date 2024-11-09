import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { Callback } from "../dto/callback/callback.dto";

@Injectable()
export class CallbackService {
    constructor(@Inject('BOOKING-MICROSERVICE') private clientKafka: ClientKafka) { }
    callback(callback: Callback) {
        return new Promise((resolve, reject) => {
            this.clientKafka.emit(`callback`, JSON.stringify(callback)).subscribe((response) => {
                if (response.errorCode == 0)
                    reject(response);
                resolve(response);
            });
        });
    }
}