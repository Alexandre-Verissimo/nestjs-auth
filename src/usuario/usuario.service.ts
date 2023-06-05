import { UpdateUsuarioDto } from 'src/usuario/dto/update-usuario.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository, FindOptionsWhere } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>
  ) {}

  async findAll() {
    return this.usuarioRepository.find({
      select: ['id', 'firstName', 'lastName', 'email']
    })
  }

  async findOneByOrFail(where: FindOptionsWhere<Usuario> | FindOptionsWhere<Usuario>[]) {
    try {
      return this.usuarioRepository.findOneByOrFail(where)
    } catch (error) {
      throw new NotFoundException(error.message)
    }
    
  }

  async store(data: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(data)
    return await this.usuarioRepository.save(usuario)
  }

  async update(id: string, data: UpdateUsuarioDto) {
    const usuario = await this.findOneByOrFail({id}) 
    this.usuarioRepository.merge(usuario, data)
    return await this.usuarioRepository.save(usuario)

  }

  async destroy(id: string) {
    await this.usuarioRepository.findOneByOrFail({id})
    this.usuarioRepository.softDelete({id})
  }


}
