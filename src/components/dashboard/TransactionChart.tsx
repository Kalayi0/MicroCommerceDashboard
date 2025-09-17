import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", transactions: 1200, revenue: 45000 },
  { time: "04:00", transactions: 800, revenue: 32000 },
  { time: "08:00", transactions: 2400, revenue: 89000 },
  { time: "12:00", transactions: 3200, revenue: 125000 },
  { time: "16:00", transactions: 2800, revenue: 98000 },
  { time: "20:00", transactions: 1800, revenue: 67000 },
];

export function TransactionChart() {
  return (
    <div className="metric-card col-span-2">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Daily Transactions</h3>
        <p className="text-sm text-muted-foreground">Real-time transaction volume and revenue</p>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="transactionGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
              </linearGradient>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Area
              type="monotone"
              dataKey="transactions"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#transactionGradient)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--success))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-card-border">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-sm text-muted-foreground">Transactions</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-success"></div>
          <span className="text-sm text-muted-foreground">Revenue</span>
        </div>
      </div>
    </div>
  );
}