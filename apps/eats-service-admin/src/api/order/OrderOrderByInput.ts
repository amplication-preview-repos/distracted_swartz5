import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  userId?: SortOrder;
  menuId?: SortOrder;
};
