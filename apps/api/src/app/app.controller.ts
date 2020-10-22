import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';
import { Message } from '@workspace/api-interfaces';



@Controller('/api/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData(): Message {
    return this.appService.getData();
  }
}
