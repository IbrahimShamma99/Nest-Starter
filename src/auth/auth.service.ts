import { Injectable } from '@nestjs/common';
import {UsersService} from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UsersService,
        private readonly jwtService: JwtService
        ){}
    async validateUser(username:string,pass:string): Promise<any> {
        const user = await this.userService.findOne(username);
        if (user && user.password === pass){
            const {password , ...result} = user;
            return result;
        }
        else{
            return null
        }
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
