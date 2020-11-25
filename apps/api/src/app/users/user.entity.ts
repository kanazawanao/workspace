import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '@workspace/api-interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column({ length: 128 })
  @ApiProperty()
  password: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  birthDay: Date;

  @Column()
  @ApiProperty()
  sex: string;

  @Column()
  @ApiProperty()
  address: string;

  @Column()
  @ApiProperty()
  qualification: string;

  @Column()
  @ApiProperty()
  graduationDate: Date;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
