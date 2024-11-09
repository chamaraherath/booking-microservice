import { callbackResponse } from "./callback.response";

export class CallBackStatus {
    response: callbackResponse;
    success: number;
    attempts: number;
    attempt_at: string;
}