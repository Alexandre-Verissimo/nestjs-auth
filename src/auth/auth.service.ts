import { Usuario } from './../usuario/entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService, private readonly jwtSerivce: JwtService) {}
  
  async login(usuario) {
    const paylod = { sub: usuario.id, email: usuario.email }

    return {
      token: this.jwtSerivce.sign(paylod)
    }
  }

  async validateUsuario(email: string, password: string) {
    let usuario: Usuario
    try {
      usuario = await this.usuarioService.findOneByOrFail({ email })
    } catch (error) {
      return null
    }
    
    const isPasswordValid = compareSync(password, usuario.password)
    if(!isPasswordValid) return null

    return usuario;
  }
}
