"use client";
import { useEffect } from "react";
import { toast } from "sonner";

export default function HibridToastClient(props: {
  hibrid: string | undefined;
}) {
  useEffect(() => {
    if (!!props.hibrid) {
      const { type, message } = JSON.parse(props.hibrid);

      if (type === "success" || type === "signin" || type === "signout") {
        toast.success(message);
      } else if (type === "error") {
        toast.error(message);
      }
    }
  }, [props.hibrid]);
  return null;
}
