import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Point, PointSchema } from './point.schema';

export type EquipmentDocument = HydratedDocument<Equipment>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Equipment {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  serialNumber: number;

  @Prop([{ type: PointSchema }])
  points?: Point[];
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
