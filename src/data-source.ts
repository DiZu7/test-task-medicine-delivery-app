import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'medicine_delivery',
  synchronize: true,
  logging: false,
  entities: ['src/entity/*.ts'],
  migrations: ['src/migration/*.ts'],
});
