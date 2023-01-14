import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Pizza } from 'src/interfaces/pizza.interface';
import { PizzasService } from '../services/pizzas.service';
import { CreatePizzaDto } from '../dto/create-pizza.dto';

@Controller()
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Get()
  async getPizzas(): Promise<Pizza[]> {
    return await this.pizzasService.findAll();
  }

  @Post()
  create(@Body() pizza: CreatePizzaDto) {
    return this.pizzasService.create(pizza);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pizzasService.delete(id);
  }
}
