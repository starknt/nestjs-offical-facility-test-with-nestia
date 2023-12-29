import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get(':name/:age')
  getHello(
    @TypedParam('name') name: string,
    @TypedParam('age') age: number, 
  ): string {
    return this.appService.getHello() + name + '\nage: ' + age;
  }
}
