"use client";

import DataTable from "@/components/security-admin/data-table";
import { demoClientSites } from "./data";

export default function ClientsSitesTable() {
  return (
    <DataTable
      data={demoClientSites}
      columns={[
        { key: "client", header: "Client" },
        { key: "site", header: "Site" },
        { key: "city", header: "City" },
        { key: "geofence", header: "Geofence" },
        { key: "supervisor", header: "Supervisor" },
      ]}
    />
  );
}
