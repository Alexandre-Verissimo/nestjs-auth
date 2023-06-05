import {IsNotEmpty } from "class-validator"

export class UpdateUsuarioDto {

  @IsNotEmpty()
  firstName: string

  @IsNotEmpty()
  lastName: string

}