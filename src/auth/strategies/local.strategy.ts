import { MessageHelper } from '../../helpers/messages.helper';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email'
    })
  }

  async validate(email: string, password: string ) {
    const usuario = await this.authService.validateUsuario(email, password)

    if(!usuario) throw new UnauthorizedException(MessageHelper.PASSWORD_OR_EMAIL_INVALID)

    return usuario;
  }
}