import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Point, PointSchema } from './point.schema';

export type EquipmentDocument = HydratedDocument<Equipment>;

@Schema()
export class Equipment {
  @Prop()
  name: string;

  @Prop()
  serialNumber: number;

  @Prop([{ type: PointSchema }])
  points: Point[];
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
