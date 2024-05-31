import React from 'react';
import { Button } from './ui/button';
import { BiLogOut } from 'react-icons/bi';
import { signOut } from '@/services/auth';
import { cookies } from 'next/headers';

const LogoutButton = () => {
    return ( 
        <form
        action={async () => {
          "use server"
          cookies().delete("loggedUserId");
          await signOut( { redirect: true, redirectTo: "/login" } );
        }}
      >
            <Button  variant={"outline"}>
                <BiLogOut />
            </Button>
        </form>
     );
}
 
export default LogoutButton;