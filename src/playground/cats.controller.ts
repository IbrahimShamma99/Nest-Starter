import { Controller, Get, Post } from '@nestjs/common';
import { Request } from 'express';

//NOTE To create controller simply `nest g controller cats`


@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
