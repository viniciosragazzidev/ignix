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

const SelectPeriod = ({ action }: any) => {
  const [valuePeriod, setValuePeriod] = React.useState("30");

  const onChange = (e: any) => {
    action({ period: e });
    setValuePeriod(e);
    console.log(e);
  };
  return (
    <Select
      defaultValue={"30"}
      value={valuePeriod || "30"}
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
