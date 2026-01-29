
"use client";   
import React from "react";
import { 
  Ticket, 
  LayoutDashboard, 
  Database, 
  History, 
  Settings, 
  PlusCircle, 
  Search 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

// Mock Data for the Charts
const chartData = [
  { day: "Mon", scans: 12 },
  { day: "Tue", scans: 18 },
  { day: "Wed", scans: 7 },
  { day: "Thu", scans: 25 },
  { day: "Fri", scans: 32 },
  { day: "Sat", scans: 45 },
  { day: "Sun", scans: 20 },
];

// Mock Data for the Voucher Table
const voucherData = [
  { id: "1", code: "DINGO-9921-X", date: "2026-01-20", status: "Stored", type: "1 Hour" },
  { id: "2", code: "DINGO-4410-L", date: "2026-01-21", status: "Used", type: "Unlimited" },
  { id: "3", code: "DINGO-1002-K", date: "2026-01-21", status: "Stored", type: "30 Mins" },
  { id: "4", code: "DINGO-8827-P", date: "2026-01-22", status: "Stored", type: "1 Hour" },
];

export default function DingoNetDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r bg-card hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Ticket className="w-6 h-6" /> DingoNet
          </h1>
        </div>
        <nav className="px-4 space-y-2">
          <Button variant="secondary" className="w-full justify-start gap-2">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Database className="w-4 h-4" /> Database
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <History className="w-4 h-4" /> Scan History
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="w-4 h-4" /> Settings
          </Button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Voucher Management</h2>
            <p className="text-muted-foreground">Monitor and manage your scanned DingoNet codes.</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search codes..." className="pl-8 w-[250px]" />
            </div>
            <Button className="gap-2">
              <PlusCircle className="w-4 h-4" /> New Scan
            </Button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Stored</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,429</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active This Week</CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+159</div>
            </CardContent>
          </Card>
          {/* Add more stats cards as needed */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Chart Section */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Scanning Activity</CardTitle>
              <CardDescription>Vouchers added to database over the last 7 days.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={12} />
                    <YAxis axisLine={false} tickLine={false} fontSize={12} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="scans" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Table Section */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Entries</CardTitle>
              <CardDescription>Latest vouchers saved to your database.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {voucherData.map((voucher) => (
                    <TableRow key={voucher.id}>
                      <TableCell className="font-mono text-xs">{voucher.code}</TableCell>
                      <TableCell>
                        <Badge variant={voucher.status === "Used" ? "secondary" : "default"}>
                          {voucher.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button variant="link" className="w-full mt-4 text-xs">View all vouchers</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}