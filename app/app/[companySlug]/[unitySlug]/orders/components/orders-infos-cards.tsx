import React from "react";
import CardValueInfo from "../../_components/card-value-infos";
import { FaBox } from "react-icons/fa6";

interface OrdersInfoCardsProps {
  orders: any;
  period: any;
}
const OrdersInfoCards = ({ orders, period }: OrdersInfoCardsProps) => {
  const TotalPedidos = orders?.total_items || 0;
  const CurrentPeriod = period?.value || "30";

  return (
    <section className="w-full grid max-[340px]:grid-cols-1 grid-cols-2 md:grid-cols-4 gap-5">
      <CardValueInfo
        className=""
        icon={<FaBox />}
        title="Total de Pedidos"
        value={TotalPedidos}
        percent="+10"
        period={CurrentPeriod}
      />
      <CardValueInfo
        icon={<FaBox />}
        title="Total de Pedidos"
        value={"50"}
        percent="+10"
        period={CurrentPeriod}
      />
      <CardValueInfo
        icon={<FaBox />}
        title="Total de Pedidos"
        value={"50"}
        percent="+10"
        period={CurrentPeriod}
      />
      <CardValueInfo
        icon={<FaBox />}
        title="Total de Pedidos"
        value={"50"}
        percent="+10"
        period={CurrentPeriod}
      />
    </section>
  );
};

export default OrdersInfoCards;
