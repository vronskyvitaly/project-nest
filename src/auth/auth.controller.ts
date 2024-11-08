import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('singup')
  singUp() {
    return this.authService.singup();
  }

  @Post('singin')
  singIn() {
    return this.authService.singin();
  }
}
