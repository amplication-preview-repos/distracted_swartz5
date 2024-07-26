import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type OrderUpdateInput = {
  quantity?: number | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
  menu?: MenuWhereUniqueInput | null;
};
