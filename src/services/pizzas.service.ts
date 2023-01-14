import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Pizza } from '../interfaces/pizza.interface';
import { CreatePizzaDto } from '../dto/create-pizza.dto';

@Injectable()
export class PizzasService {
  constructor(
    @Inject('PIZZA_MODEL')
    private pizzaModel: Model<Pizza>,
  ) {}

  async create(createPizzaDto: CreatePizzaDto): Promise<Pizza> {
    const createdPizza = new this.pizzaModel(createPizzaDto);
    return createdPizza.save();
  }

  async findAll(): Promise<Pizza[]> {
    return this.pizzaModel.find().exec();
  }

  delete(id: string) {
    return this.pizzaModel.deleteOne({ _id: id });
  }
}
