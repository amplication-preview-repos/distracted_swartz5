import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { MenuListRelationFilter } from "../menu/MenuListRelationFilter";

export type RestaurantWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  rating?: FloatNullableFilter;
  menus?: MenuListRelationFilter;
};
