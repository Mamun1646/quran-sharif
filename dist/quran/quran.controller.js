"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuranController = void 0;
const common_1 = require("@nestjs/common");
const quran_service_1 = require("./quran.service");
let QuranController = class QuranController {
    constructor(quranService) {
        this.quranService = quranService;
    }
    findAll() {
        return this.quranService.findAll();
    }
    surah_search(surah) {
        return this.quranService.versesFindBySurah(surah.search);
    }
    async keyword(param) {
        console.log(param);
        return await this.quranService.versesFindByWord(param.word);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuranController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("name/:search"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuranController.prototype, "surah_search", null);
__decorate([
    (0, common_1.Get)(":word"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuranController.prototype, "keyword", null);
QuranController = __decorate([
    (0, common_1.Controller)('quran'),
    __metadata("design:paramtypes", [quran_service_1.QuranService])
], QuranController);
exports.QuranController = QuranController;
//# sourceMappingURL=quran.controller.js.map