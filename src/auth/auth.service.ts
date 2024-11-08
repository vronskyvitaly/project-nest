import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  singin() {
    return { message: 'I sing in' };
  }

  singup() {
    return { message: 'I sing up' };
  }
}
