import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAllBooks(@Query() query: ExpressQuery) {
    return this.booksService.findAll(query);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.booksService.getBookById(id);
  }

  @Post()
  async createBook(@Body() creareBookDto: CreateBookDto) {
    return this.booksService.createBook(creareBookDto);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: string,

    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.updateBook(id, updateBookDto);
  }

  @Delete(':id')
  async deleteBookById(@Param('id') id: string) {
    return this.booksService.deleteBookById(id);
  }
}
