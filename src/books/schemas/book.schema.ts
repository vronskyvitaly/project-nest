import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
