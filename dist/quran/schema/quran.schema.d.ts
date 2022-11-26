import mongoose, { Document } from 'mongoose';
import { Verses } from "./verses.schema";
export type QuranDocument = Quran & Document;
export declare class Quran {
    id?: string;
    transliteration: string;
    translation: string;
    type: string;
    total_verses?: number;
    verses?: Verses[];
}
export declare const QuranSchema: mongoose.Schema<Quran, mongoose.Model<Quran, any, any, any, any>, {}, {}, {}, {}, "type", Quran>;
