import { Module } from '@nestjs/common';
import { QuranService } from './quran.service';
import { QuranController } from './quran.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Quran, QuranSchema } from './schema/quran.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Quran.name, schema: QuranSchema }]),
  ],
  controllers: [QuranController],
  providers: [QuranService],
})
export class QuranModule {}
