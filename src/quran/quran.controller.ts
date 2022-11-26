import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuranService } from './quran.service';
@Controller()
export class QuranController {
  constructor(private readonly quranService: QuranService) {}

  @Get('quran')
  findAll() {
    return this.quranService.findAll();
  }

  @Get("search")
 keySearch(@Body() keyword: string) {
    return this.quranService.versesFindByWord(keyword);
  }


}
