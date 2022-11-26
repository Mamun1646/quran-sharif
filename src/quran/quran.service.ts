import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quran, QuranDocument } from './schema/quran.schema';

@Injectable()
export class QuranService {
  constructor(
    @InjectModel(Quran.name) private quranModel: Model<QuranDocument>,
  ) { }

  async findAll() {
    return await this.quranModel.find();
  }

  async versesFindBySurah(data: string): Promise<Quran[]> {
    const regex = new RegExp(data, 'i');
    return await this.quranModel.find({
      transliteration: { $regex: regex }
    });
  }
  async versesFindByWord(data: string): Promise<Quran[]> {


    const regex = new RegExp(data, 'i');
    const result = await this.quranModel.find(
      {},
      {
        verses: {
          $elemMatch: {
            translation: { $regex: regex },
          },
        },
        _id: 0,
        transliteration: 1,
        translation: 1,
        id:1
      },
    );



    return result;
  }



}