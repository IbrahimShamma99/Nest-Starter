import { Injectable } from '@nestjs/common';

/**ANCHOR 
 * Dependencies are services or objects that a class needs to perform its 
 * function. DI is a coding pattern in which a class asks for dependencies 
 * from external sources rather than creating them itself.
 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome Nest JS!';
  }
}
