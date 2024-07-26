import { Menu } from "../menu/Menu";

export type Restaurant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  rating: number | null;
  menus?: Array<Menu>;
};
