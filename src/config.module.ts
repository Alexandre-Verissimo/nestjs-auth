import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'], // Especifique o caminho para o arquivo .env
    }),
  ],
})
export class AppConfigModule {}