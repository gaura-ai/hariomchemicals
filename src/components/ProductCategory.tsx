import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { LucideIcon } from "lucide-react";

interface ProductCategoryProps {
  title: string;
  icon: LucideIcon;
  products: string[];
  iconBgColor?: string;
  iconColor?: string;
}

export function ProductCategory({ 
  title, 
  icon: Icon, 
  products,
  iconBgColor = "bg-green-100",
  iconColor = "text-green-600"
}: ProductCategoryProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 ${iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <Icon className={`w-7 h-7 ${iconColor}`} />
          </div>
          <CardTitle className="text-green-700">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {products.map((product, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-green-50 text-green-700 hover:bg-green-100"
            >
              {product}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
