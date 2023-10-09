import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Point } from '../entities/equipment.entities';

export class CreateEquipmentDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  readonly name: string;

  @IsNotEmpty()
  readonly serialNumber: number;

  readonly points: Point[];
}
