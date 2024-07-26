import { OrderCreateNestedManyWithoutMenusInput } from "./OrderCreateNestedManyWithoutMenusInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  orders?: OrderCreateNestedManyWithoutMenusInput;
  restaurant?: RestaurantWhereUniqueInput | null;
};
