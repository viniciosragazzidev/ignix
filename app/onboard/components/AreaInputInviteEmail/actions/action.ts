"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email().min(1, "Email não pode ser vazio"),
});

export default async function OrderInviteAction(
  _prevState: any,
  params: FormData
) {
  const validation = schema.safeParse({
    email: params.get("email"),
  });

  if (validation.success) {
    const OrderInvite = await sendOrderInvite();
    // revalidatePath("/onboard");

    return {
      OrderInvite: OrderInvite,
    };
  } else {
    ////console.log(validation.error.issues);
    return {
      errors: validation.error.issues,
    };
  }
}

const sendOrderInvite = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    name: "Ola",
  };
};
