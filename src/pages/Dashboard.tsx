import { 
  ShoppingCart, 
  DollarSign, 
  Package, 
  TrendingUp,
  Users,
  Activity
} from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ServiceStatus } from "@/components/dashboard/ServiceStatus";
import { TransactionChart } from "@/components/dashboard/TransactionChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background-secondary border-b border-card-border px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
              <p className="text-muted-foreground">Monitor your e-commerce microservices platform</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm">
                <div className="status-indicator status-online"></div>
                <span className="text-muted-foreground">Live</span>
              </div>
              <button className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium transition-smooth hover:shadow-glow">
                Export Report
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Daily Transactions"
              value="12,847"
              change="+18.2% from yesterday"
              changeType="positive"
              icon={ShoppingCart}
              gradient="primary"
            />
            <MetricCard
              title="Revenue Today"
              value="$456,789"
              change="+12.5% from yesterday"
              changeType="positive"
              icon={DollarSign}
              gradient="success"
            />
            <MetricCard
              title="Active Products"
              value="8,543"
              change="+156 new products"
              changeType="positive"
              icon={Package}
              gradient="warning"
            />
            <MetricCard
              title="Active Users"
              value="24,891"
              change="+8.1% from last week"
              changeType="positive"
              icon={Users}
              gradient="primary"
            />
          </div>

          {/* Charts and Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <TransactionChart />
            <ServiceStatus />
          </div>

          {/* Activity and Additional Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentActivity />
            <div className="grid grid-cols-1 gap-6">
              <MetricCard
                title="Average Response Time"
                value="187ms"
                change="-23ms from yesterday"
                changeType="positive"
                icon={Activity}
                gradient="success"
                className="h-fit"
              />
              <MetricCard
                title="System Uptime"
                value="99.97%"
                change="30 days running"
                changeType="positive"
                icon={TrendingUp}
                gradient="primary"
                className="h-fit"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}