FROM node:18.4.0-alpine AS development

WORKDIR /usr/src/app

ARG STAGE

ENV NODE_ENV=${NODE_ENV}

COPY . .

RUN npm install

RUN if [ "$STAGE" = "production" ]; then \
    npm run build; \
    rm -rf node_modules; \
    npm install --only=prod; \
fi

ENTRYPOINT if [ "$NODE_ENV" = "development" ]; then \
    npm run start:dev; \
else \
    npm run start:prod; \
fi

EXPOSE 3000
