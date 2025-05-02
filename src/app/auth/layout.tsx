import React, { ReactNode } from "react";
import LeftAuth from "@/components/auth-common/left-auth";
import NavBar from "@/components/auth-common/nav-auth";
import ContinueIcons from "@/components/auth-common/continue-with";
import Providers from "@/components/providers";
import { Toaster } from "sonner";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-full">
      <LeftAuth />
      <section className="flex-1 ">
        <NavBar />
        <Providers>{children}</Providers>
        <Toaster />
        <ContinueIcons />
      </section>
    </main>
  );
}
