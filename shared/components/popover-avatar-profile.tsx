import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BiMoney, BiUser } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { SwitchIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";

interface PopoverAvatarProfileProps {
  user: any;
}
export function DropdownMenuAvatarProfile({ user }: PopoverAvatarProfileProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="cursor-pointer"
        asChild
      >
        <Avatar className="w-9  h-9">
          <AvatarImage
            src={`${user.image} || ''`}
            alt="@shadcn"
          />
          <AvatarFallback className="border border-primary/10 bg-background hover:bg-accent text-primary">
            {user.name.charAt(0)}
            {user.surname?.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex gap-2">
            <BiUser />
            Perfil
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <Link
            className="w-full"
            href={`/app/${user.CompanyUser.slugId}`}
          >
            <DropdownMenuItem className="flex gap-2">
              <SwitchIcon /> Trocar Unidade
            </DropdownMenuItem>{" "}
          </Link>
          <DropdownMenuItem className="flex gap-2">
            <BsGear /> Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
