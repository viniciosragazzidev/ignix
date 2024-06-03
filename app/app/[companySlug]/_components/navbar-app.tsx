import React from "react";

import Logo from "@/shared/components/Logo";
import { DropdownMenuAvatarProfile } from "@/shared/components/popover-avatar-profile";
import LogoutButton from "@/shared/components/logout-button";
import NavbarCrumb from "./navbar-crumb";
const NavbarApp = ({ user }: { user: any }) => {
  return (
    <header className="flex gap-3 justify-between w-full p-5">
      <nav className="flex gap-3 justify-between w-full">
        <Logo
          mode="simple"
          size="small"
        />
        <NavbarCrumb user={user} />
        <div className="flex gap-4">
          <DropdownMenuAvatarProfile user={user} />
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
};

export default NavbarApp;
