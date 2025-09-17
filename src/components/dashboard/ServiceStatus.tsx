import { Activity, Database, ShoppingCart, CreditCard, Package, Users } from "lucide-react";

const services = [
  {
    name: "API Gateway",
    status: "online",
    response: "145ms",
    icon: Activity,
  },
  {
    name: "User Service",
    status: "online", 
    response: "89ms",
    icon: Users,
  },
  {
    name: "Product Service",
    status: "online",
    response: "203ms", 
    icon: Package,
  },
  {
    name: "Order Service",
    status: "warning",
    response: "456ms",
    icon: ShoppingCart,
  },
  {
    name: "Payment Service", 
    status: "online",
    response: "178ms",
    icon: CreditCard,
  },
  {
    name: "Inventory DB",
    status: "online",
    response: "67ms",
    icon: Database,
  },
];

export function ServiceStatus() {
  return (
    <div className="metric-card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">Microservices Status</h3>
        <p className="text-sm text-muted-foreground">Real-time service health monitoring</p>
      </div>
      
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.name} className="flex items-center justify-between p-3 rounded-lg bg-background-secondary border border-card-border">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-card">
                <service.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">{service.name}</p>
                <p className="text-sm text-muted-foreground">Response: {service.response}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div 
                className={`status-indicator ${
                  service.status === "online" 
                    ? "status-online" 
                    : service.status === "warning"
                    ? "status-warning"
                    : "status-error"
                }`}
              />
              <span className="text-xs font-medium text-muted-foreground capitalize">
                {service.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}