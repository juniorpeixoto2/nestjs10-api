import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString, maxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  // @Optional()
  description: string;
}
