import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Equipment } from 'src/schemas/equipment.schema';
import { Model } from 'mongoose';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment.name) private equipmentModel: Model<Equipment>,
  ) {}

  async create(createEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
    return this.equipmentModel.create(createEquipmentDto);
  }

  async findAll(): Promise<Equipment[]> {
    return this.equipmentModel.find().exec();
  }

  async findOne(id: string): Promise<Equipment> {
    return this.equipmentModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentModel.findByIdAndUpdate(
      { _id: id },
      updateEquipmentDto,
    );
  }

  async remove(id: string) {
    return this.equipmentModel.findByIdAndRemove({ _id: id }).exec();
  }
}
