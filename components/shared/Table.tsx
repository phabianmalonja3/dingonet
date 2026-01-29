import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const vouchers = [
  { id: "1", code: "DIN-829-XQ", expiry: "2026-12-31", status: "Active" },
  { id: "2", code: "DIN-112-LP", expiry: "2026-05-20", status: "Used" },
  { id: "3", code: "DIN-445-ZZ", expiry: "2026-08-15", status: "Active" },
];

export function VoucherTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Voucher Code</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vouchers.map((v) => (
            <TableRow key={v.id}>
              <TableCell className="font-mono font-medium">{v.code}</TableCell>
              <TableCell>{v.expiry}</TableCell>
              <TableCell>
                <Badge variant={v.status === "Used" ? "secondary" : "default"}>
                  {v.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}