import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type OrderCreateInput = {
  quantity?: number | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
  menu?: MenuWhereUniqueInput | null;
};
