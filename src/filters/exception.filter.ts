import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';


@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private logger = new Logger('HTTP');
  private logDir = path.join(__dirname, '../../logs');
  private logFile = path.join(this.logDir, 'app.log');

  constructor() {
    this.ensureLogFileExists();
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const logMessage = `Exception in request: ${request.method} ${request.url}
    ${exception.stack}`;

    this.logger.error(logMessage);
    this.writeLog(logMessage);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      body: {
        message: exception.getResponse().message,
      },
    });
  }

  private writeLog(message: string) {
    fs.appendFile(this.logFile, message + '\n', (err) => {
      if (err) console.error('Failed to write log:', err);
    });
  }

  private ensureLogFileExists() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
    if (!fs.existsSync(this.logFile)) {
      fs.writeFileSync(this.logFile, '', { flag: 'a' });
    }
  }
}
