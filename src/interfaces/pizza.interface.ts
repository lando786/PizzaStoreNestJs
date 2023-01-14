import { Document } from 'mongoose';

export interface Pizza extends Document {
  readonly name: string;
  readonly price: number;
  readonly toppings: string;
}
