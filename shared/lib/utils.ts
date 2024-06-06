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

export function formatarData(dataISO: string) {
  const data = new Date(dataISO);

  // Extraia os componentes de dia, mês e ano
  const dia = data.getDate();
  const mes = data.getMonth() + 1; // Os meses em JavaScript são baseados em zero (janeiro = 0)
  const ano = data.getFullYear(); // Pegue apenas os dois últimos dígitos do ano

  // Formate a data no formato "aa/mm/dd"
  const dataFormatada = `${dia.toString().padStart(2, "0")}/${mes
    .toString()
    .padStart(2, "0")}/${ano.toString().padStart(2, "0")}`;

  return dataFormatada;
}

export function formatarCurrency({ currency = "0" }: { currency: string }) {
  //console.log(currency);

  // Remove qualquer caractere não numérico, exceto o ponto decimal
  const valorNumerico = parseFloat(
    currency.replace(/[^0-9,.]/g, "").replace(",", ".")
  );

  // Formata o valor com duas casas decimais e adiciona o símbolo R$
  const valorFormatado = valorNumerico.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return valorFormatado;
}
