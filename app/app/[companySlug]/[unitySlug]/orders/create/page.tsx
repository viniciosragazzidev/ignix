"use server";
import { Link } from "next-view-transitions";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import FormOS from "./components/form-os";
import { auth } from "@/services/auth";
import { createOrder } from "../actions/action";
import { permanentRedirect } from "next/navigation";
import { setHibrid } from "@/shared/providers/HibridToast";
import { revalidatePath } from "next/cache";

const CreateNewOrderPage = async ({
  params,
}: {
  params: { companySlug: string; unitySlug: string };
}) => {
  const session = await auth();
  const user = session?.user;
  const createOsFunction = async ({ os }: { os: any }) => {
    "use server";
    const createdOs = await createOrder({ os: os });

    if (createdOs.success) {
      setHibrid({
        type: "success",
        message: "Seu pedido foi criado com sucesso!",
      });
      revalidatePath(`/app/${params.companySlug}/${params.unitySlug}/orders`);
      permanentRedirect(
        `/app/${params.companySlug}/${params.unitySlug}/orders`
      );
    }
  };
  return (
    <div className="w-full relative block h-[calc(100vh-110px)] px-4 ">
      <Link
        className="flex items-center w-min  group my-4"
        href={`/app/${params.companySlug}/${params.unitySlug}/orders`}
      >
        <BiChevronLeft className="text-primary text-xl " />
        <span className="group-hover:text-primary text-sm group-hover:translate-x-[-4px]  transition-all">
          Voltar
        </span>
      </Link>

      <FormOS
        user={user}
        params={params}
        action={async ({ os }: { os: any }) => {
          "use server";
          await createOsFunction({ os: os });
        }}
      />
    </div>
  );
};

export default CreateNewOrderPage;
