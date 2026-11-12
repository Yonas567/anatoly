"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface DataTableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T extends { id: string }> {
  columns: DataTableColumn<T>[];
  data: T[];
}

export default function DataTable<T extends { id: string }>({
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={String(col.key)} isHeader className="px-4 py-3 text-start text-sm font-medium text-gray-500 dark:text-gray-400">
                {col.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} className="border-t border-gray-100 dark:border-gray-800">
              {columns.map((col) => (
                <TableCell key={String(col.key)} className="px-4 py-3 text-sm text-gray-800 dark:text-white/90">
                  {col.render
                    ? col.render(row)
                    : String(row[col.key as keyof T] ?? "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
