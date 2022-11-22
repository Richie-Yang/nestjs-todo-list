import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString, MaxLength } from 'class-validator';
import { TODO_STATUS } from '../variables';

export { Create, Update };

class Create {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  title: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  detail: string;

  @IsOptional()
  @IsIn(Object.values(TODO_STATUS))
  @IsString()
  @MaxLength(100)
  status: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  createdBy: string;
}

class Update extends PartialType(Create) {}
