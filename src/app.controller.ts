import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
// npm i @nestjs/passport passport passport-local
//a passport local egy nagyon basic auth stratégia, amely username+password-öt enged használni

// npm i @types/passport-local

// user nevű modul generálása: nest g module users
// user nevű service generálása: nest g service users


// npm i express-session - session-ok megvalósításához kell. Main.ts-ben kell majd használni

//npm i @nestjs/jwt passport-jwt
// npm i -D @types/passport-jwt

//elindításhoz: npm run start:dev

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Request() req): any {
    
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get("protected")
  getHello(@Request() req): any { //ToDo: require an Bearer token, validate token
    return req.user;
  }
}
