import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { NoteModule } from './note/note.module';
import { AppController } from './app.controller';
import { QuranModule } from './quran/quran.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
     // envFilePath: '.local.env',
       envFilePath:'.prod.env'
    }),
    
    MongooseModule.forRoot(process.env.MONGO_URL),
    QuranModule,
    NoteModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
