import { User } from "../user/User";
import { Menu } from "../menu/Menu";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  totalPrice: number | null;
  user?: User | null;
  menu?: Menu | null;
};
