export type UserRole =
  | "client"
  | "guard"
  | "supervisor"
  | "operations"
  | "super_admin";

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string;
  organization?: string;
  employeeNo?: string;
}

export interface AuthSession {
  user: Omit<DemoUser, "password">;
  signedInAt: string;
}
