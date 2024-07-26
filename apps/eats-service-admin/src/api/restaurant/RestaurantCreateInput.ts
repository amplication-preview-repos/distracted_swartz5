import { MenuCreateNestedManyWithoutRestaurantsInput } from "./MenuCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  menus?: MenuCreateNestedManyWithoutRestaurantsInput;
};
