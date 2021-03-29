import { Book } from './book.entity';
import { BooksService } from './books.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBody, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiConstant } from '@workspace/constants';
import { DeleteResult, InsertResult } from 'typeorm';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';

const constants = ApiConstant;
@ApiTags(constants.books)
@Controller(`/api${constants.books}`)
@ApiSecurity('accessToken')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  @ApiOperation({ summary: 'get books' })
  async getBooks(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'get book' })
  async getBook(@Param('id') id: number): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'put book' })
  async putBook(@Param('id') id: number, @Body() book: Book) {
    return this.booksService.put(id, book);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'post book' })
  @ApiBody({ type: Book, description: 'book' })
  async postBook(@Req() request, @Body() book: Book): Promise<InsertResult> {
    return this.booksService.post(request.user.userId, book);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  @ApiOperation({ summary: 'delete book' })
  async deleteBook(@Param(':id') id: number): Promise<DeleteResult> {
    return this.booksService.remove(id);
  }
}
