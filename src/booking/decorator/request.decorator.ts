import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UtilManager } from 'src/util/utility';
import { GatewayReference } from '../database/nosql/model/array/gateway.array';

export const AsyncRequest = createParamDecorator((data: unknown, context: ExecutionContext) => {

    let req = context.switchToHttp().getRequest();
    return new GatewayReference(
        UtilManager.getRandomString(),
        'sync',
        req.method,
        req.headers && req.headers['callback-url'] ? req.headers['callback-url'] : ''
    );
});