import * as mongoose from 'mongoose';

export const PizzaSchema = new mongoose.Schema({
  name: String,
  price: Number,
  toppings: String,
});
