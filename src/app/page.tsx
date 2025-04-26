import { authOptions } from "@/auth";
import LeftAuth from "@/components/auth-common/left-auth";
import NavBar from "@/components/auth-common/nav-auth";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { Children } from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);
  //get session
  // get server session
  // useSession
  console.log(session);
  return (
    <>
      <main className="flex h-screen w-full">
        <Button type="submit" className="commonButton">
          dgh
        </Button>
      </main>
    </>
  );
}
