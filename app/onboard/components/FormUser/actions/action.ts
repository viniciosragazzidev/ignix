"use server";

import { createUser } from "@/shared/lib/requsitions";
import { setHibrid } from "@/shared/providers/HibridToast";
import { error } from "console";
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

export default async function userAction(_prevState: any, params: FormData) {
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
    const user = await createUser({
      ...validation.data,
      birthdate: new Date(validation.data.birthdate),
    });
    if (user.error.name === "PrismaClientKnownRequestError") {
      setHibrid({
        type: "error",
        message: "Outro usuário já foi criado utilizando essas informações!",
      });
      return {
        error: "Outro usuário já foi criado utilizando essas informações!",
      };
    } else {
      setHibrid({
        type: "success",
        message: "Seu perfil foi criado com sucesso!",
      });
      return {
        user: user,
      };
    }
  } else {
    //console.log(validation.error.issues);
    return {
      errors: validation.error.issues,
    };
  }
}
