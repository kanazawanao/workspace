import { ApiProperty } from '@nestjs/swagger';
import { ISkillType } from '@workspace/api-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SkillType implements ISkillType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  skillType: number;

  @Column()
  @ApiProperty()
  skillTypeName: string;
}
