
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, TrendingUp, Package, Users, DollarSign, FileText } from 'lucide-react';
import { SaleRecord, Invoice } from "@/types";

const AdminDashboard = () => {
  const [timeFrame, setTimeFrame] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  // Mock data - in real app this would come from your backend
  const mockSalesData: SaleRecord[] = [
    { id: '1', date: '2024-01-15', amount: 15000, orderType: 'regular', customerName: 'Ahmed Ali', items: 5 },
    { id: '2', date: '2024-01-16', amount: 25000, orderType: 'printing', customerName: 'Sara Khan', items: 8 },
    { id: '3', date: '2024-01-17', amount: 18000, orderType: 'regular', customerName: 'Omar Sheikh', items: 3 },
    { id: '4', date: '2024-01-18', amount: 35000, orderType: 'printing', customerName: 'Fatima Malik', items: 12 },
    { id: '5', date: '2024-01-19', amount: 22000, orderType: 'regular', customerName: 'Hassan Raza', items: 6 },
  ];

  const mockInvoices: Invoice[] = [
    {
      id: '1',
      invoiceNumber: 'INV-2024-001',
      date: '2024-01-15',
      customerName: 'Ahmed Ali',
      customerEmail: 'ahmed@example.com',
      customerPhone: '+92300123456',
      items: [],
      subtotal: 15000,
      discount: 0,
      total: 15000,
      status: 'paid'
    },
    {
      id: '2',
      invoiceNumber: 'INV-2024-002',
      date: '2024-01-16',
      customerName: 'Sara Khan',
      customerEmail: 'sara@example.com',
      customerPhone: '+92301234567',
      items: [],
      subtotal: 25000,
      discount: 5000,
      total: 20000,
      status: 'pending'
    }
  ];

  const chartData = useMemo(() => {
    const groupedData = mockSalesData.reduce((acc, sale) => {
      const date = new Date(sale.date);
      let key: string;

      if (timeFrame === 'daily') {
        key = date.toLocaleDateString();
      } else if (timeFrame === 'weekly') {
        const weekStart = new Date(date.setDate(date.getDate() - date.getDay()));
        key = `Week of ${weekStart.toLocaleDateString()}`;
      } else {
        key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      }

      if (!acc[key]) {
        acc[key] = { period: key, regular: 0, printing: 0, total: 0 };
      }

      acc[key][sale.orderType] += sale.amount;
      acc[key].total += sale.amount;
      return acc;
    }, {} as Record<string, any>);

    return Object.values(groupedData);
  }, [timeFrame]);

  const totalSales = mockSalesData.reduce((sum, sale) => sum + sale.amount, 0);
  const totalOrders = mockSalesData.length;
  const regularOrders = mockSalesData.filter(s => s.orderType === 'regular').length;
  const printingOrders = mockSalesData.filter(s => s.orderType === 'printing').length;

  const orderTypeData = [
    { name: 'Regular Orders', value: regularOrders, color: '#8884d8' },
    { name: 'Printing Orders', value: printingOrders, color: '#82ca9d' }
  ];

  const chartConfig = {
    regular: { label: "Regular Orders", color: "#8884d8" },
    printing: { label: "Printing Orders", color: "#82ca9d" },
    total: { label: "Total Sales", color: "#ffc658" }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <Select value={timeFrame} onValueChange={(value: 'daily' | 'weekly' | 'monthly') => setTimeFrame(value)}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₨{totalSales.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Regular Orders</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{regularOrders}</div>
              <p className="text-xs text-muted-foreground">Standard clothing orders</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Printing Orders</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{printingOrders}</div>
              <p className="text-xs text-muted-foreground">Custom printing orders</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sales" className="space-y-4">
          <TabsList>
            <TabsTrigger value="sales">Sales Analytics</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
          </TabsList>

          <TabsContent value="sales" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sales Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Revenue trends over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="period" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="regular" fill="var(--color-regular)" />
                        <Bar dataKey="printing" fill="var(--color-printing)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Order Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Distribution</CardTitle>
                  <CardDescription>Regular vs Printing Orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={orderTypeData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {orderTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="invoices">
            <Card>
              <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
                <CardDescription>Manage customer invoices and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInvoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{invoice.invoiceNumber}</p>
                        <p className="text-sm text-gray-600">{invoice.customerName}</p>
                        <p className="text-xs text-gray-500">{invoice.date}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="font-semibold">₨{invoice.total.toLocaleString()}</p>
                        <Badge variant={invoice.status === 'paid' ? 'default' : invoice.status === 'pending' ? 'secondary' : 'destructive'}>
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
