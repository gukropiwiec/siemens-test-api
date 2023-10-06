import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PointDocument = HydratedDocument<Point>;

@Schema({ _id: false, versionKey: false })
export class Point {
  @Prop()
  name: string;

  @Prop()
  dataType: string;

  @Prop()
  value: string;
}

export const PointSchema = SchemaFactory.createForClass(Point);
