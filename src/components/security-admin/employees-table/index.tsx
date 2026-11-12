"use client";

import DataTable from "@/components/security-admin/data-table";
import { Badge } from "@/components/ui/badge";
import { demoGuards } from "./data";

export default function EmployeesTable() {
  return (
    <DataTable
      data={[...demoGuards]}
      columns={[
        { key: "employeeNo", header: "ID" },
        { key: "name", header: "Name" },
        { key: "phone", header: "Phone" },
        { key: "sites", header: "Assigned sites" },
        {
          key: "status",
          header: "Status",
          render: (row) => (
            <Badge variant="light" color="success">
              {row.status}
            </Badge>
          ),
        },
      ]}
    />
  );
}
