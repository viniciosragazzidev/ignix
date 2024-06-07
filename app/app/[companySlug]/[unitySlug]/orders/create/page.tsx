import { Link } from "next-view-transitions";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import FormOS from "./components/form-os";

const CreateNewOrderPage = ({
  params,
}: {
  params: { companySlug: string; unitySlug: string };
}) => {
  const itens = [
    {
      id: "1",
      imagens: [
        "https://images.pexels.com/photos/1149022/pexels-photo-1149022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1149022/pexels-photo-1149022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      name: "Computador",
      brand: "Dell",
      model: "XPS 13",
      nSerie: "123456789",
      description:
        "Computador  não liga e apresenta rachaduras na lateral e na parte trazeira.",
      status: "FINALIZE",
      amount: 160,
    },
    {
      id: "2",
      imagens: [
        "https://images.pexels.com/photos/1149022/pexels-photo-1149022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1149022/pexels-photo-1149022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      name: "Computador",
      brand: "Dell",
      model: "XPS 13",
      nSerie: "123456789",
      description:
        "Computador  não liga e apresenta rachaduras na lateral e na parte trazeira.",
      status: "PENDING",
      amount: 160,
    },
  ];
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

      <FormOS />
    </div>
  );
};

export default CreateNewOrderPage;
