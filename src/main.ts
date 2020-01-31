import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const server = async function () {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
server();