import { auth } from "@/services/auth";
import React from "react";
import { redirect } from "next/navigation";
 
const App = async () => {
  const session = await auth();
  if(!session) return
 
 

     const user = session.user;
     //console.log(session);
      
     if ( user?.CompanyUser?.length === 0) {
       redirect("/onboard");
     }

     if(user && user.companies && user.companies[0].slugId) {
       redirect(`/app/${user.companies[0].slugId}`);
     }

     
  return (
    <div className="app">
      <h1>App</h1>
    </div>
  );
};

export default App;
