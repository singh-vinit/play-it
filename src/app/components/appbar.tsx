import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function AppBar() {
  const { data: session, status } = useSession();
  if (status == "authenticated") {
    return <Button onClick={() => signOut()}>signout</Button>;
  }
  return <Button onClick={() => signIn()}>signin</Button>;
}
