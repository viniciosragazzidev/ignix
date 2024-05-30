"use server";

import { createCompany } from "@/shared/lib/requsitions";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Nome não pode ser vazio"),
  cnpj: z.string().min(1, "CNPJ não pode ser vazio"),
  address: z.string().min(1, "Endereço não pode ser vazio"),
  city: z.string().min(1, "Cidade não pode ser vazio"),
  state: z.string().min(1, "Estado não pode ser vazio"),
  email: z.string().email().min(1, "Email não pode ser vazio"),
  phone: z.string().min(1, "Telefone não pode ser vazio"),
});

export default async function CompanyAction(_prevState: any, params: FormData) {
  const validation = schema.safeParse({
    name: params.get("name"),
    cnpj: params.get("cnpj"),
    address: params.get("address"),
    city: params.get("city"),
    state: params.get("state"),
    email: params.get("email"),
    phone: params.get("phone"),
  });
  const profileId = params.get("profileId");
  if (validation.success) {
    const Company = await createCompany({
      ...validation.data,
    });

    revalidatePath("/onboard");

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
