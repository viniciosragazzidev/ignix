import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const findErrors = (fieldName: string, errors?: any) => {
  if (!errors || errors?.length === 0) return null;

  return errors
    .filter((item: any) => {
      return item.path.includes(fieldName);
    })
    .map((item: any) => item.message);
};
