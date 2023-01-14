import { DatabaseModule } from './database.module';
import { Module } from '@nestjs/common';
import { PizzasService } from '../services/pizzas.service';
import { pizzaProviders } from '../providers/pizza.providers';
import { PizzasController } from '../controllers/pizzas.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PizzasController],
  providers: [PizzasService, ...pizzaProviders],
})
export class PizzasModule {}
