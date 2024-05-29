"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Nome não pode ser vazio"),
  cnpj: z.string().min(1, "CNPJ não pode ser vazio"),
  andress: z.string().min(1, "Endereço não pode ser vazio"),
  city: z.string().min(1, "Cidade não pode ser vazio"),
  state: z.string().min(1, "Estado não pode ser vazio"),
  email: z.string().email().min(1, "Email não pode ser vazio"),
  phone: z.string().min(1, "Telefone não pode ser vazio"),
});

export default async function CompanyAction(_prevState: any, params: FormData) {
  const validation = schema.safeParse({
    name: params.get("name"),
    cnpj: params.get("cnpj"),
    andress: params.get("andress"),
    city: params.get("city"),
    state: params.get("state"),
    email: params.get("email"),
    phone: params.get("phone"),
  });

  if (validation.success) {
    const Company = await sendCompany();
    // revalidatePath("/onboard");

    return {
      Company: Company,
    };
  } else {
    console.log(validation.error.issues);
    return {
      errors: validation.error.issues,
    };
  }
}

const sendCompany = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    name: "Ola",
  };
};
