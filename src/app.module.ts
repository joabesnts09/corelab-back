import { Module } from '@nestjs/common'
import { UsersModule } from './modules/users/users.module'
import { AuthModule } from './modules/auth/auth.module'
import { TasksModule } from './modules/tasks/tasks.module'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './database/prisma.service'

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TasksModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  
],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
