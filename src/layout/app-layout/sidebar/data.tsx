import {
  CalendarIcon,
  CallIcon,
  ChatIcon,
  GearIcon,
  LayoutGridIcon,
  TableIcon,
  UserCircleIcon,
} from "@/icons";
import type { NavItem } from "./types";

export const navItems: NavItem[] = [
  {
    icon: <LayoutGridIcon className="size-6" />,
    key: "securityDashboard",
    path: "/admin",
  },
  {
    icon: <CallIcon className="size-6" />,
    key: "serviceRequests",
    path: "/admin/service-requests",
  },
  {
    icon: <ChatIcon className="size-6" />,
    key: "complaints",
    path: "/admin/complaints",
  },
  {
    icon: <TableIcon className="size-6" />,
    key: "attendance",
    path: "/admin/attendance",
  },
  {
    icon: <CalendarIcon className="size-6" />,
    key: "rosters",
    path: "/admin/rosters",
  },
  {
    icon: <UserCircleIcon className="size-6" />,
    key: "clientsSites",
    path: "/admin/clients-sites",
  },
];

export const othersItems: NavItem[] = [
  {
    icon: <UserCircleIcon className="size-6" />,
    key: "employees",
    path: "/admin/employees",
  },
  {
    icon: <GearIcon className="size-6" />,
    key: "securitySettings",
    path: "/admin/settings",
  },
];

export const supportItems: NavItem[] = [];
