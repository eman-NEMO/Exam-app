import React, { ReactNode } from "react";
import LeftAuth from "@/components/auth-common/left-auth";
import NavBar from "@/components/auth-common/nav-auth";
import ContinueIcons from "@/components/auth-common/continue-with";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen w-full">
      <LeftAuth />
      <section className="flex-1 ">
        <NavBar />
      
        {children}
   
        <ContinueIcons />
      </section>
    </main>
  );
}
