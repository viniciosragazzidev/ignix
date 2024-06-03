"use client";

import React, { use, useEffect } from "react";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import { BiLock, BiLockOpen } from "react-icons/bi";
import { Link } from "next-view-transitions";
import { AppContext } from "@/shared/context/AppContext";
const UnitsList = ({ units, companySlug }: any) => {
  const { setCurrentUnit } = use(AppContext);

  return (
    <ScrollArea className="h-40  pr-3">
      {!units || units?.length === 0 ? (
        <p className="text-center">Nenhuma unidade encontrada</p>
      ) : (
        <ul className="flex flex-col  ">
          {units?.map((unit: any) => (
            <Link
              key={unit.id}
              href={`/app/${companySlug}/${unit.slugId}`}
            >
              <li
                // onClick={() => setCurrentUnit(unit.slugId)}
                key={unit.id}
              >
                <div className="flex items-center justify-between cursor-pointer hover:bg-accent p-2 rounded-xl group ">
                  <span>
                    <h3 className="font-bold text-sm group-hover:text-primary">
                      Unidade {unit.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      #{unit.slugId}
                    </p>
                  </span>

                  <span className="text-primary">
                    <BiLockOpen />
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </ScrollArea>
  );
};

export default UnitsList;
