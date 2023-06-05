import { JwtStrategy } from './strategies/jwt.strategy';
import { UsuarioModule } from './../usuario/usuario.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AppConfigModule } from 'src/config.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    PassportModule, 
    UsuarioModule, 
    AppConfigModule,
    JwtModule.register({
      privateKey: process.env.JWT_PRIVATE_KEY,
      signOptions: { expiresIn: process.env.JWT_TIMER_EXPIRED}
    })
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {

}
