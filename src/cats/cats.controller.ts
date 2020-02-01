import { Controller, Get, Req , Res ,Body , Redirect , HttpCode , Post } from '@nestjs/common';
import { Request } from 'express';
//NOTE TO create your own decorators import { createParamDecorator } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface'; //ANCHOR body schema
import { CreateCatDto } from './dto/create-cat.dto';//ANCHOR Data type object You can call it body schema status

@Controller('cats')
export class CatsController   {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
