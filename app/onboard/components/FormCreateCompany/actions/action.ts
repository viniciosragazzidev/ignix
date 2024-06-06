"use server";

import { createCompany } from "@/shared/lib/requsitions";
import { setHibrid } from "@/shared/providers/HibridToast";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
  const userId = params.get("userId");
  if (validation.success) {
    const Company = await createCompany({
      ...validation.data,
    });
    if (Company.error.name === "PrismaClientKnownRequestError") {
      return {
        errors: "Outra empresa já foi criada utilizando essas informações!",
      };
    }

    if (Company) {
      revalidatePath("/onboard/");
      // redirect(`/app/${Company.company.slugId}`);
    }
    return {
      Company: Company,
    };
  } else {
    ////console.log(validation.error.issues);
    return {
      errors: validation.error.issues,
    };
  }
}
