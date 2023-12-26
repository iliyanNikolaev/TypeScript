import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { resolve } from 'path';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getIndex(@Res() response: Response): void {
    const htmlFileName = 'index.html'
    const htmlFilePath = resolve(__dirname, '../public', htmlFileName);

    response.sendFile(htmlFilePath);
  }
}
