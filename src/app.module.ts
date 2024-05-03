import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbSettings } from 'settings';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: dbSettings.HOST,
      port: dbSettings.PORT,
      username: dbSettings.USER,
      password: dbSettings.PASSWORD,
      entities: [join(__dirname,"**/*.entity{.ts,.js}")],
      database: dbSettings.DATABASE,
      synchronize: true,
      logging: true,
    }),

    UserModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
