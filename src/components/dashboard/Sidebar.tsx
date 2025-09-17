import { 
  BarChart3, 
  Package, 
  CreditCard, 
  Activity, 
  Settings, 
  Users, 
  TrendingUp,
  Database,
  Shield
} from "lucide-react";

const navigation = [
  { name: "Overview", icon: BarChart3, current: true },
  { name: "Products", icon: Package, current: false },
  { name: "Transactions", icon: CreditCard, current: false },
  { name: "Inventory", icon: Database, current: false },
  { name: "Analytics", icon: TrendingUp, current: false },
  { name: "Users", icon: Users, current: false },
  { name: "Services", icon: Activity, current: false },
  { name: "Security", icon: Shield, current: false },
  { name: "Settings", icon: Settings, current: false },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-background-secondary border-r border-card-border">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="px-6 py-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">MicroCommerce</h1>
              <p className="text-sm text-muted-foreground">Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 pb-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  className={`
                    w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-smooth
                    ${
                      item.current
                        ? "bg-gradient-primary text-primary-foreground shadow-glow"
                        : "text-muted-foreground hover:text-foreground hover:bg-card-hover"
                    }
                  `}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Status Indicator */}
        <div className="px-4 pb-4">
          <div className="bg-card rounded-lg p-4 border border-card-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">System Status</span>
              <div className="status-indicator status-online"></div>
            </div>
            <p className="text-xs text-muted-foreground">All services operational</p>
          </div>
        </div>
      </div>
    </div>
  );
}