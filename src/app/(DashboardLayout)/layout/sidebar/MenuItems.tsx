import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconShoppingBag,
  IconReplaceFilled,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Order List",
    icon: IconShoppingBag,
    href: "/order-list",
  },
  
  {
    navlabel: true,
    subheader: "AUTH",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Change Password",
    icon: IconReplaceFilled,
    href: "/authentication/reset-password",
  },
  
];

export default Menuitems;
