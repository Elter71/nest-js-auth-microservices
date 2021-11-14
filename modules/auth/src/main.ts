import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      url: `${process.env.REDIS_URL}`,
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
  Logger.log('Auth microservice running');
}
bootstrap();
