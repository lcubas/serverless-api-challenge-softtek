import { HttpStatus } from '../enums/HttpStatus';
import HttpException from './HttpException';

export default class NotFoundException extends HttpException {
  constructor(message = 'Not found') {
    super(HttpStatus.NOT_FOUND, message);
  }
}
