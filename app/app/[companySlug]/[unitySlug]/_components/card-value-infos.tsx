import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { BiDollar } from "react-icons/bi";

interface CardContent {
  className?: string;
  title: string;
  value: string;
  period: string;
  percent: string;
  icon: React.ReactNode;
}
export default function CardValueInfo({
  className,
  title,
  value,
  period = "30",
  percent,
  icon,
}: CardContent) {
  return (
    <Card className={cn("w-full border-primary/50", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <span className="h-4 w-4  text-primary">{icon}</span>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {percent}% que nos últimos {period} dias
        </p>
      </CardContent>
    </Card>
  );
}
