import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '@workspace/api-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
