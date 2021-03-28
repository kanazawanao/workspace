import { ApiProperty } from '@nestjs/swagger';
import { IBook } from '@workspace/api-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book implements IBook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  type: string;

  @Column()
  @ApiProperty()
  author: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column()
  @ApiProperty()
  impressions: string;

  @Column()
  @ApiProperty()
  other: string;

  @Column()
  @ApiProperty()
  publisher: string;

  @Column()
  @ApiProperty()
  rate: number;

  @Column()
  @ApiProperty()
  url: string;
}
