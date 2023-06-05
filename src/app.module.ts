import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AppConfigModule } from './config.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AppConfigModule,UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
