import { AuthGuard } from '@nestjs/passport';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UpdateUsuarioDto } from 'src/usuario/dto/update-usuario.dto';

@Controller('api/v1/usuario')
@UseGuards(AuthGuard('jwt'))
export class UsuarioController {

  constructor(
    private readonly usuarioService: UsuarioService
  ) {}

  @Get()
  async index() {
    return await this.usuarioService.findAll()
  }

  @Post()
  async store(@Body() body: CreateUsuarioDto) {
    return await this.usuarioService.store(body)
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usuarioService.findOneByOrFail({id})
  }

  @Patch(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: UpdateUsuarioDto) {
    return await this.usuarioService.update(id, body)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
   await this.usuarioService.destroy(id)
  }

}
