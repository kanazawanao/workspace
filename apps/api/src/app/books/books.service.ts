import { Book } from './book.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.booksRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    return await this.booksRepository.findOne(id);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.booksRepository.delete({ id });
  }

  async post(userId: number, book: Book): Promise<InsertResult> {
    book.userId = userId;
    return await this.booksRepository.insert(book);
  }

  async put(id: number, book: Book): Promise<UpdateResult> {
    return await this.booksRepository.update(
      { id },
      {
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        description: book.description,
        impressions: book.impressions,
        other: book.other,
        rate: book.rate,
        type: book.type,
      }
    );
  }
}
