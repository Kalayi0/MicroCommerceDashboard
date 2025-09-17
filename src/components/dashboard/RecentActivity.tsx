import { Package, CreditCard, Users, AlertTriangle, CheckCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "transaction",
    message: "Payment processed for Order #12,847",
    timestamp: "2 minutes ago",
    status: "success",
    icon: CreditCard,
  },
  {
    id: 2,
    type: "inventory",
    message: "Low stock alert: iPhone 15 Pro Max (5 remaining)",
    timestamp: "5 minutes ago",
    status: "warning",
    icon: Package,
  },
  {
    id: 3,
    type: "user",
    message: "New enterprise customer registered",
    timestamp: "8 minutes ago",
    status: "success",
    icon: Users,
  },
  {
    id: 4,
    type: "system",
    message: "Database backup completed successfully",
    timestamp: "15 minutes ago",
    status: "success",
    icon: CheckCircle,
  },
  {
    id: 5,
    type: "alert",
    message: "API Gateway response time elevated",
    timestamp: "23 minutes ago",
    status: "warning",
    icon: AlertTriangle,
  },
];

export function RecentActivity() {
  return (
    <div className="metric-card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest system events and alerts</p>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-background-secondary border border-card-border">
            <div className={`p-2 rounded-lg ${
              activity.status === "success" 
                ? "bg-success/10" 
                : activity.status === "warning"
                ? "bg-warning/10"
                : "bg-muted"
            }`}>
              <activity.icon className={`h-4 w-4 ${
                activity.status === "success" 
                  ? "text-success" 
                  : activity.status === "warning"
                  ? "text-warning"
                  : "text-muted-foreground"
              }`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{activity.message}</p>
              <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm font-medium text-primary hover:text-primary-light transition-smooth">
        View all activity →
      </button>
    </div>
  );
}