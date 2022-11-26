import { Injectable, Param } from '@nestjs/common';
import { CreateNoteInput } from './dto/create-note.input';

import { Note, NoteDocument } from './schema/note.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { clearConfigCache } from 'prettier';
// import { NoteModule } from './note.module';


@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}
  async create(createNoteInput: CreateNoteInput) {
    return this.noteModel.create(createNoteInput);
  }

  async findNoteByDay(day: number): Promise<any> {
     
    
    const date = new Date();
    const currentDate =date.getDate();
    const filterDay=currentDate-day
    return await this.noteModel.find({
       day: { $gte: filterDay} 
    }
      
    );
  }


  findAll() {
    return this.noteModel.find();
  }



}