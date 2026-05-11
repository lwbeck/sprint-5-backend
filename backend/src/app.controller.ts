import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { getDefaultResultOrder } from 'dns';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/user")
  getUser(): string{
    return "0";
  }
}
