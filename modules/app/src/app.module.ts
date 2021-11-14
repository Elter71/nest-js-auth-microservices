import { Module } from '@nestjs/common';
import { User } from './user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ms-user',
      password: 'ms-user-pass',
      database: 'ms_user',
      synchronize: true,
      entities: [User],
    }),
    UserModule,
  ],
})
export class AppModule {}
