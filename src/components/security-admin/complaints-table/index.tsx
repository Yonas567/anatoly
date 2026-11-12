"use client";

import DataTable from "@/components/security-admin/data-table";
import { Badge } from "@/components/ui/badge";
import { mockCases } from "@/data/security/mock-data";

export default function ComplaintsTable() {
  return (
    <DataTable
      data={mockCases}
      columns={[
        { key: "caseNo", header: "Case" },
        { key: "type", header: "Type" },
        { key: "site", header: "Site" },
        { key: "severity", header: "Severity" },
        {
          key: "status",
          header: "Status",
          render: (row) => (
            <Badge variant="light" color={row.overdue ? "error" : "gray"}>
              {row.status}
            </Badge>
          ),
        },
        {
          key: "overdue",
          header: "Deadline",
          render: (row) =>
            row.overdue ? (
              <Badge variant="light" color="error">
                Overdue
              </Badge>
            ) : (
              "On track"
            ),
        },
      ]}
    />
  );
}
