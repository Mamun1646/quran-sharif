import { QuranService } from './quran.service';
export declare class QuranController {
    private readonly quranService;
    constructor(quranService: QuranService);
    findAll(): Promise<(import("./schema/quran.schema").Quran & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    keyword(param: any): Promise<any>;
}
