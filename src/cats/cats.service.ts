import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

//SECTION 
/*service => 
  Injectable marks CatsService as provider
  Then we request that Nest inject the provider into our controller class.
  Finally, we register the provider with the Nest IoC container in app modules
  NOTE IOC => Inversion of control
  */

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
      this.cats.push(cat);
    }
  
    findAll(): Cat[] {
      return this.cats;
    }  
}
