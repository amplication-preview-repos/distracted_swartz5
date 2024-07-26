import { OrderUpdateManyWithoutMenusInput } from "./OrderUpdateManyWithoutMenusInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  orders?: OrderUpdateManyWithoutMenusInput;
  restaurant?: RestaurantWhereUniqueInput | null;
};
