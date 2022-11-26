import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuranService } from './quran.service';
@Controller()
export class QuranController {
  constructor(private readonly quranService: QuranService) {}

  @Get('quran')
  findAll() {
    return this.quranService.findAll();
  }

//   @Get(":search")
//  surah_search(@Param() surah):Promise<any> {
  
//     return this.quranService.versesFindBySurah(surah.search);
//   }
  @Get(":word")
   async keyword(@Param() param):Promise<any> {
   console.log(param)
     return await this.quranService.versesFindByWord(param.word);
   }

}
