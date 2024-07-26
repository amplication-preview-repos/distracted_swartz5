/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MenuUpdateManyWithoutRestaurantsInput {
  @Field(() => [MenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuWhereUniqueInput],
  })
  connect?: Array<MenuWhereUniqueInput>;

  @Field(() => [MenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuWhereUniqueInput],
  })
  disconnect?: Array<MenuWhereUniqueInput>;

  @Field(() => [MenuWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MenuWhereUniqueInput],
  })
  set?: Array<MenuWhereUniqueInput>;
}

export { MenuUpdateManyWithoutRestaurantsInput as MenuUpdateManyWithoutRestaurantsInput };
