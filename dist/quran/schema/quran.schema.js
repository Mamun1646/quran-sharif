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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuranSchema = exports.Quran = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const verses_schema_1 = require("./verses.schema");
let Quran = class Quran {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Quran.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Quran.prototype, "transliteration", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Quran.prototype, "translation", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Quran.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Quran.prototype, "total_verses", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: (0, mongoose_1.raw)(Object.assign({}, verses_schema_1.Verses)) }]),
    __metadata("design:type", Array)
], Quran.prototype, "verses", void 0);
Quran = __decorate([
    (0, mongoose_1.Schema)()
], Quran);
exports.Quran = Quran;
exports.QuranSchema = mongoose_1.SchemaFactory.createForClass(Quran);
//# sourceMappingURL=quran.schema.js.map