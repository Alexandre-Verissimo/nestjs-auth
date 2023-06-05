import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { UsuarioController } from './usuario.controller';
import { usuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [
    ...usuarioProviders,
    UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
