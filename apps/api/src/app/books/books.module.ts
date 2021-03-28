import { Book } from './book.entity';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  exports: [BooksService],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
