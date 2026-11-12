import type { DemoUser } from "./types";

export const DEMO_PASSWORD = "demo123";

export const demoUsers: DemoUser[] = [
  {
    id: "u-client-1",
    name: "Sara Bekele",
    email: "client@demo.com",
    password: DEMO_PASSWORD,
    role: "client",
    phone: "+251911000001",
    organization: "Sunrise Trading PLC",
  },
  {
    id: "u-guard-1",
    name: "Daniel Tadesse",
    email: "guard@demo.com",
    password: DEMO_PASSWORD,
    role: "guard",
    phone: "+251911000002",
    employeeNo: "GRD-1042",
  },
  {
    id: "u-supervisor-1",
    name: "Helen Assefa",
    email: "supervisor@demo.com",
    password: DEMO_PASSWORD,
    role: "supervisor",
    phone: "+251911000003",
  },
  {
    id: "u-ops-1",
    name: "Mekonnen Alemu",
    email: "ops@demo.com",
    password: DEMO_PASSWORD,
    role: "operations",
    phone: "+251911000004",
  },
  {
    id: "u-admin-1",
    name: "System Owner",
    email: "admin@demo.com",
    password: DEMO_PASSWORD,
    role: "super_admin",
    phone: "+251911000005",
  },
];

export function findDemoUser(email: string, password: string): DemoUser | null {
  const normalized = email.trim().toLowerCase();
  return (
    demoUsers.find(
      (u) => u.email.toLowerCase() === normalized && u.password === password,
    ) ?? null
  );
}
