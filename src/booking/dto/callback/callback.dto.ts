import { CallBackStatus } from './callback.status';
import { Request as ClientRequest } from './request';

//Callback fails document for save in mongo
export class Callback {
  entity: string;
  request: ClientRequest
  success: boolean;
  total_attempts: number;
  status: CallBackStatus[];
}