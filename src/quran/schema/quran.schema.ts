import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Verses } from "./verses.schema"

export type QuranDocument = Quran & Document;
@Schema()

export class Quran {
  @Prop()
  id?: string;
  @Prop()
  transliteration: string;
  @Prop()
  translation: string;
  @Prop()
  type: string;
  @Prop()
  total_verses?: number;
  @Prop([{ type: raw({ ...Verses }) }])
  verses?: Verses[];
}
export const QuranSchema = SchemaFactory.createForClass(Quran);
