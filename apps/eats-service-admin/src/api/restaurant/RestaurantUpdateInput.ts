import { MenuUpdateManyWithoutRestaurantsInput } from "./MenuUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  menus?: MenuUpdateManyWithoutRestaurantsInput;
};
