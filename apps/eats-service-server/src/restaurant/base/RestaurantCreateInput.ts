/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { MenuCreateNestedManyWithoutRestaurantsInput } from "./MenuCreateNestedManyWithoutRestaurantsInput";
import { Type } from "class-transformer";

@InputType()
class RestaurantCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number | null;

  @ApiProperty({
    required: false,
    type: () => MenuCreateNestedManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => MenuCreateNestedManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => MenuCreateNestedManyWithoutRestaurantsInput, {
    nullable: true,
  })
  menus?: MenuCreateNestedManyWithoutRestaurantsInput;
}

export { RestaurantCreateInput as RestaurantCreateInput };
