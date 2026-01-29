import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Ticket, HardDrive, Activity, AlertCircle } from "lucide-react";

// Mock data for the chart
const data = [
  { name: "Mon", total: 40 },
  { name: "Tue", total: 30 },
  { name: "Wed", total: 20 },
  { name: "Thu", total: 50 },
  { name: "Fri", total: 80 },
  { name: "Sat", total: 100 },
  { name: "Sun", total: 60 },
];

export default function DingoDashboard() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">DingoNet Control</h2>
      
      {/* Top Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Vouchers</CardTitle>
            <Ticket className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        {/* Add more cards for "Used", "Database Sync", "Active Users" */}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Voucher Activity</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip />
                <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Scans</CardTitle>
          </CardHeader>
          <CardContent>
            {/* List of recent voucher entries saved to your DB */}
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Voucher #DN-9902 saved to DB</p>
              <p className="text-sm text-muted-foreground">Voucher #DN-8812 saved to DB</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}