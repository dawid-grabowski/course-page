import { HTMLAttributeAnchorTarget } from "react";
import { GLOBAL_CONSTS } from "@/app/_consts/consts";

export type Navigation = {
  id: number;
  name: string;
  href: string;
  target: HTMLAttributeAnchorTarget;
};

export const navigation: Navigation[] = [
  { id: 1, name: "O mnie", href: GLOBAL_CONSTS.HOME_URL, target: "_self" },
  { id: 2, name: "Kursy", href: GLOBAL_CONSTS.COURSES_URL, target: "_self" },
  {
    id: 3,
    name: "Konsultacje",
    href: GLOBAL_CONSTS.CONSULTATIONS_URL,
    target: "_blank",
  },
];
