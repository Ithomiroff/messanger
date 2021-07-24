import { HttpException, HttpStatus } from '@nestjs/common';

export const createException = (text: string, status?: HttpStatus) => {
  const _status = status || HttpStatus.BAD_REQUEST;

  throw new HttpException({
    message: text,
    status: _status,
  }, _status);
};
