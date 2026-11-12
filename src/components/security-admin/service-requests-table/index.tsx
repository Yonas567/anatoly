"use client";

import DataTable from "@/components/security-admin/data-table";
import { Badge } from "@/components/ui/badge";
import { mockServiceRequests } from "@/data/security/mock-data";

export default function ServiceRequestsTable() {
  return (
    <DataTable
      data={mockServiceRequests}
      columns={[
        { key: "reference", header: "Reference" },
        { key: "contactName", header: "Contact" },
        { key: "organization", header: "Organization" },
        { key: "serviceType", header: "Service" },
        { key: "city", header: "City" },
        {
          key: "status",
          header: "Status",
          render: (row) => (
            <Badge variant="light" color="primary">
              {row.status}
            </Badge>
          ),
        },
      ]}
    />
  );
}
