import { Module } from '@nestjs/common';
import { InfoModule } from 'src/info/info.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [InfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
