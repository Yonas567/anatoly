export const serviceTypes = [
  "Static guarding",
  "Event security",
  "VIP / escort",
  "Patrol",
  "CCTV monitoring",
  "Other",
] as const;

export const requestStatuses = [
  "New",
  "Under review",
  "Site assessment scheduled",
  "Quotation sent",
  "Accepted",
  "Contract active",
  "Rejected",
  "Cancelled",
] as const;

export const complaintCategories = [
  "Guard conduct",
  "Absence / lateness",
  "Sleeping on duty",
  "Uniform / appearance",
  "Incident handling",
  "Billing",
  "Other",
] as const;

export const mockServiceRequests = [
  {
    id: "1",
    reference: "SR-2026-00123",
    contactName: "Abel Hailu",
    organization: "Bole Retail Center",
    phone: "+251911223344",
    serviceType: "Static guarding",
    city: "Addis Ababa",
    guardsNeeded: 4,
    status: "Under review" as const,
    createdAt: "2026-11-10T09:15:00Z",
  },
  {
    id: "2",
    reference: "SR-2026-00108",
    contactName: "Sara Bekele",
    organization: "Sunrise Trading PLC",
    phone: "+251911000001",
    serviceType: "Patrol",
    city: "Addis Ababa",
    guardsNeeded: 2,
    status: "Quotation sent" as const,
    createdAt: "2026-11-05T14:20:00Z",
  },
  {
    id: "3",
    reference: "SR-2026-00097",
    contactName: "Guest User",
    organization: "—",
    phone: "+251922556677",
    serviceType: "Event security",
    city: "Hawassa",
    guardsNeeded: 12,
    status: "New" as const,
    createdAt: "2026-11-12T07:40:00Z",
  },
];

export const mockCases = [
  {
    id: "1",
    caseNo: "FB-2026-00441",
    type: "Complaint",
    category: "Absence / lateness",
    site: "Sunrise Warehouse — Bole",
    severity: "High",
    status: "Investigating",
    dueAt: "2026-11-12T18:00:00Z",
    overdue: true,
  },
  {
    id: "2",
    caseNo: "FB-2026-00438",
    type: "Compliment",
    category: "Other",
    site: "Sunrise HQ",
    severity: "Low",
    status: "Closed",
    dueAt: "2026-11-15T12:00:00Z",
    overdue: false,
  },
];

export const mockSitesLive = [
  {
    id: "s1",
    name: "Sunrise Warehouse — Bole",
    client: "Sunrise Trading PLC",
    expected: 2,
    checkedIn: 1,
    status: "partial" as const,
  },
  {
    id: "s2",
    name: "Medhanialem Branch",
    client: "Commercial Bank",
    expected: 3,
    checkedIn: 3,
    status: "covered" as const,
  },
  {
    id: "s3",
    name: "Airport Cargo Yard",
    client: "Ethio Logistics",
    expected: 2,
    checkedIn: 0,
    status: "uncovered" as const,
  },
];

export const mockGuardShift = {
  site: "Sunrise Warehouse — Bole",
  address: "Bole Sub City, Woreda 03, Addis Ababa",
  start: "2026-11-12T06:00:00+03:00",
  end: "2026-11-12T18:00:00+03:00",
  status: "Scheduled" as const,
};

export const clientSites = [
  "Sunrise HQ",
  "Sunrise Warehouse — Bole",
  "Sunrise Showroom — Piassa",
];
