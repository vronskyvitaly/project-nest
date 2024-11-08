import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Query } from 'express-serve-static-core';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private bookModel: mongoose.Model<Book>,
  ) {}

  async findAll(query: Query) {
    const resPerPage = 2; // Сколько будем получать на странице
    const currentPage = +query.page || 1; // По умолчанию если пользователь ничего не указал
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};

    const books = await this.bookModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);

    return books;
  }

  async getBookById(id: any) {
    const book = await this.bookModel.findById(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  async createBook(creareBookDto: CreateBookDto) {
    return await this.bookModel.create(creareBookDto);
  }

  async updateBook(id: string, book: UpdateBookDto) {
    const updateBook = await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });

    return updateBook;
  }

  async deleteBookById(id: string) {
    const updateBook = await this.bookModel.findByIdAndDelete(id);
    return updateBook;
  }
}
