"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Nome não pode ser vazio"),
  surname: z.string().min(1, "Sobrenome não pode ser vazio"),
  cpf: z.string().min(1, "CPF não pode ser vazio"),
  gender: z.string().min(1, "Genero não pode ser vazio"),
  birthdate: z.string().min(1, "Data obrigatória"),
  email: z.string().email().min(1, "Email não pode ser vazio"),
  phone: z.string().min(1, "Telefone não pode ser vazio"),
});

export default async function profileAction(_prevState: any, params: FormData) {
  const validation = schema.safeParse({
    name: params.get("name"),
    surname: params.get("surname"),
    cpf: params.get("cpf"),
    gender: params.get("gender"),
    birthdate: params.get("birthdate"),
    email: params.get("email"),
    phone: params.get("phone"),
  });

  if (validation.success) {
    const profile = await sendProfile();
    revalidatePath("/onboard");

    return {
      profile: profile,
    };
  } else {
    console.log(validation.error.issues);
    return {
      errors: validation.error.issues,
    };
  }
}

const sendProfile = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    name: "Ola",
  };
};
