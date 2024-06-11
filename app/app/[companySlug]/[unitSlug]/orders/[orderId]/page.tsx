import { getCurrentUnitIdByUnitSlug } from "@/shared/lib/utils";
import React from "react";
import { getCurrentUnit } from "../../actions/action";
import { getOrder } from "../actions/action";

interface OrderPageProps {
  params: {
    companySlug: string;
    unitSlug: string;
    orderId: string;
  };
}
const OrderPage = async ({ params }: OrderPageProps) => {
  const currentUnitId = await getCurrentUnit(params.unitSlug);
  const order = await getOrder({
    orderId: params.orderId,
    unitId: currentUnitId.id,
  });
  return (
    <div>
      <h1>{order.id}</h1>
    </div>
  );
};

export default OrderPage;
