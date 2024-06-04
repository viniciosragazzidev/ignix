import { Badge } from "@/shared/components/ui/badge";
import React from "react";

export enum Status {
  PENDING = "Pendente",
  ANALYZE = "Em análize",
  AWAIT = "Aguardando aprovação",
  IN_PROGRESS = "Em andamento",
  DELIVERED = "Entregue",
  FINALIZE = "Finalizado",
  CANCELLED = "Cancelado",
}
const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge
      className="text-sm"
      variant={
        status === Status.PENDING
          ? "pending"
          : Status.ANALYZE
          ? "analyze"
          : Status.AWAIT
          ? "await"
          : Status.IN_PROGRESS
          ? "in_progress"
          : Status.DELIVERED
          ? "delivered"
          : Status.FINALIZE
          ? "finalize"
          : Status.CANCELLED
          ? "cancelled"
          : "default"
      }
    >
      {Status[status]}
    </Badge>
  );
};

export default StatusBadge;
