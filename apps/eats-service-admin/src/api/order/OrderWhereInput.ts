import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  menu?: MenuWhereUniqueInput;
};
