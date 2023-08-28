import { HTMLAttributeAnchorTarget } from "react";

export type Navigation = {
  id: number;
  name: string;
  href: string;
  target: HTMLAttributeAnchorTarget;
};

export const navigation: Navigation[] = [
  { id: 1, name: "O mnie", href: "/", target: "_self" },
  { id: 2, name: "Kursy", href: "/courses", target: "_self" },
  {
    id: 3,
    name: "Konsultacje",
    href: "https://app.zencal.io/u/grabowskidawid",
    target: "_blank",
  },
];
