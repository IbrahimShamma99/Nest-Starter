/**SECTION 
 * The routing mechanism controls which controller receives which requests. 
 * Frequently, each controller has more than one route, 
 * and different routes can perform different actions.
 */
import { Controller, Get, Post , Redirect , Query , Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('/NIGGAA')
  @Redirect("https://docs.nestjs.com/v5/")

  @Get('/docs')
  @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
