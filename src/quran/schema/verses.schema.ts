import { Prop } from "@nestjs/mongoose";
export class Verses {
  @Prop({ type: String })
  id?: string;
  @Prop({ type: String })
  text?: string;
  @Prop({ type: String })
  translation?: string;
}
