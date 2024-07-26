import { Order } from "../order/Order";
import { Restaurant } from "../restaurant/Restaurant";

export type Menu = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  orders?: Array<Order>;
  restaurant?: Restaurant | null;
};
