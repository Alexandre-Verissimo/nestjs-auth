import { MessageHelper } from '../../helpers/messages.helper';
import { IsEmail, IsNotEmpty, Matches } from "class-validator"
import { RegExHelper } from "src/helpers/regex_helper"

export class CreateUsuarioDto {

  @IsNotEmpty()
  firstName: string

  @IsNotEmpty()
  lastName: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @Matches(RegExHelper.password, {
    message: MessageHelper.PASSWORD_VALID
  }) 
  password: string
}