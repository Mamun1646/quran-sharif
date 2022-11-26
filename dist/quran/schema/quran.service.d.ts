import { Model } from 'mongoose';
import { Quran, QuranDocument } from './quran.schema';
export declare class QuranService {
    private quranModel;
    constructor(quranModel: Model<QuranDocument>);
    findAll(): Promise<(Quran & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    versesFindBySurah(data: string): Promise<Quran[]>;
    versesFindByWord(data: string): Promise<Quran[]>;
}
