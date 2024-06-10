import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";
import React from "react";
import {
  BiAlarmExclamation,
  BiAlarmSnooze,
  BiBlock,
  BiCheckCircle,
  BiParty,
  BiRocket,
} from "react-icons/bi";
import { TbAlertCircle } from "react-icons/tb";

export enum Status {
  PENDING = "Pendente",
  ANALISE = "Em análize",
  AWAIT = "Aguardando aprovação",
  IN_PROGRESS = "Em andamento",
  DELIVERED = "Entregue",
  FINALIZE = "Finalizado",
  CANCELLED = "Cancelado",
}
export const StatusA: any = [
  {
    PENDING: "Pendente",
  },
  {
    ANALISE: "Em analise",
  },
  {
    AWAIT: "Aguardando",
  },
  {
    IN_PROGRESS: "Iniciado",
  },
  {
    DELIVERED: "Entregue",
  },
  {
    FINALIZE: "Finalizado",
  },
  {
    CANCELLED: "Cancelado",
  },
];
const StatusBadge = ({
  status,
  className,
}: {
  status: any;
  className?: any;
}) => {
  const currentStatus = StatusA.find((item: any) => item[status])?.[status];
  return (
    <Badge
      className={cn(`text-sm `, className)}
      variant={
        status === "PENDING"
          ? "pending"
          : status === "ANALISE"
          ? "ANALISE"
          : status === "AWAIT"
          ? "await"
          : status === "IN_PROGRESS"
          ? "in_progress"
          : status === "DELIVERED"
          ? "delivered"
          : status === "FINALIZE"
          ? "finalize"
          : status === "CANCELLED"
          ? "cancelled"
          : "default"
      }
    >
      <span className="flex items-center gap-1">
        <span>
          {currentStatus === "Pendente" ? (
            <span>
              <TbAlertCircle />
            </span>
          ) : currentStatus === "Em analise" ? (
            <span>
              <BiAlarmExclamation />
            </span>
          ) : currentStatus === "Aguardando" ? (
            <span>
              <BiAlarmSnooze />
            </span>
          ) : currentStatus === "Iniciado" ? (
            <span>
              <BiRocket />
            </span>
          ) : currentStatus === "Entregue" ? (
            <span>
              <BiCheckCircle />
            </span>
          ) : currentStatus === "Finalizado" ? (
            <span>
              <BiParty />
            </span>
          ) : currentStatus === "Cancelado" ? (
            <span>
              <BiBlock />
            </span>
          ) : null}
        </span>
        <span>{currentStatus}</span>
      </span>
    </Badge>
  );
};

export default StatusBadge;
