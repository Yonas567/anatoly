import type { UserRole } from "./types";

export function homePathForRole(role: UserRole): string {
  switch (role) {
    case "client":
      return "/portal";
    case "guard":
      return "/guard";
    case "supervisor":
      return "/admin/attendance";
    case "operations":
    case "super_admin":
      return "/admin";
    default:
      return "/";
  }
}

export function roleLabel(role: UserRole): string {
  switch (role) {
    case "client":
      return "Client";
    case "guard":
      return "Guard";
    case "supervisor":
      return "Supervisor";
    case "operations":
      return "Operations";
    case "super_admin":
      return "Super Admin";
    default:
      return role;
  }
}
