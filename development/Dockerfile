FROM node:17.1.0 AS development

WORKDIR /app

COPY package.json ./
RUN yarn install --dev-dependencies

COPY . .
RUN touch .env
RUN printenv > .env
RUN yarn build
