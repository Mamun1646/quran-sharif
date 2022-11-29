import { QuranService } from './quran.service';
export declare class QuranController {
    private readonly quranService;
    constructor(quranService: QuranService);
    findAll(): Promise<(import("./schema/quran.schema").Quran & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    surah_search(surah: any): Promise<any>;
    keyword(param: any): Promise<any>;
}
