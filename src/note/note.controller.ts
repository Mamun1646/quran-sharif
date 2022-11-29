import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteInput } from './dto/create-note.input';
import { clearConfigCache } from 'prettier';

@Controller("note")
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  findNote() {
    return this.noteService.findAll();
  }
  @Get("surah/:word")
  async search(@Param() param): Promise<any> {
    const { word } = param;
    return await this.noteService.findSurah(word);
  }
  @Get(":day")
  async Surah_Name(@Param() param): Promise<any> {
    const { day } = param;
    return await this.noteService.findNoteByDay(day);
  }

  @Post()
  createNote(@Body() createNoteInput: CreateNoteInput) {
    return this.noteService.create(createNoteInput);
  }
}
