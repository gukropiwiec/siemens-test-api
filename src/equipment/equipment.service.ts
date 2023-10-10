import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Equipment, EquipmentDocument } from '../schemas/equipment.schema';
import { Model } from 'mongoose';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment.name)
    private readonly equipmentModel: Model<EquipmentDocument>,
  ) {}

  async create(
    createEquipmentDto: CreateEquipmentDto,
  ): Promise<EquipmentDocument> {
    return this.equipmentModel.create(createEquipmentDto);
  }

  async findAll(): Promise<EquipmentDocument[]> {
    return this.equipmentModel.find().exec();
  }

  async findOne(serialNumber: number): Promise<EquipmentDocument> {
    return this.equipmentModel.findOne({ serialNumber }).exec();
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
