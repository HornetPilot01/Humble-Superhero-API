import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller("Ping")
export class AppController {
  constructor() {}

  @Get()
  @ApiOperation({ summary: 'Get Ping' })
  @ApiResponse({ status: 200, description: 'Server is alive.' })
  getHello(): string {
    return `Server is alive!`;
  }
}
