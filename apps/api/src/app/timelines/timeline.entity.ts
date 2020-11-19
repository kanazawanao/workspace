import { ApiProperty } from '@nestjs/swagger';
import { ITimeline } from '@workspace/api-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Timeline implements ITimeline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  date: Date;

  @Column()
  @ApiProperty()
  event: string;
}
