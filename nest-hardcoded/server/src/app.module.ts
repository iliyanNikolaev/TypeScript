import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot:'/public',
      exclude: ['/api*']
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
