export class ErrorHandler extends Error {
  name = 'Controller Error';
  status: number;
  message: string;
  code?: number;

  constructor(status: number, msg: string, code?: number) {
    super(msg);
    this.message = msg;
    this.status = status;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}
