import { Connection } from 'mongoose';
import { PizzaSchema } from '../schemas/pizza.schema';

export const pizzaProviders = [
  {
    provide: 'PIZZA_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Pizza', PizzaSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
