import mongoose from 'mongoose';
export type NoteDocument = Note & Document;
export declare class Note {
    username?: string;
    surah?: number;
    verse?: number;
    note?: string;
    day?: number;
    month?: number;
    date?: string;
}
export declare const NoteSchema: mongoose.Schema<Note, mongoose.Model<Note, any, any, any, any>, {}, {}, {}, {}, "type", Note>;
