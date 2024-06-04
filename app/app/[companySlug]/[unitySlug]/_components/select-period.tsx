"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import React from "react";

const SelectPeriod = ({ action, period }: any) => {
  const [valuePeriod, setValuePeriod] = React.useState(period?.value || "30");
  console.log(period?.value);

  const onChange = (e: any) => {
    action({ period: e });
    setValuePeriod(e);
    console.log(e);
  };
  return (
    <Select
      defaultValue={period?.value}
      value={valuePeriod || period?.value}
      onValueChange={onChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Últimos 30 dias" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="7">Últimos 7 dias</SelectItem>
          <SelectItem value="15">Últimos 15 dias</SelectItem>
          <SelectItem value="30">Últimos 30 dias</SelectItem>
          <SelectItem value="90">Últimos 90 dias</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectPeriod;
