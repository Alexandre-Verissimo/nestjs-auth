import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: process.env.TYPEORM_CONECTION as any,
        host: process.env.TYPEORM_HOST as string,
        port: Number(process.env.TYPEORM_PORT),
        username: process.env.TYPEORM_USERNAME as string,
        password: process.env.TYPEORM_PASSWORD as string,
        database: process.env.TYPEORM_DATABASE as string,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];