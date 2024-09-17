"use client";
import { AppBar } from "@/app/components/appbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div>
      <div className="p-4 shadow-md flex justify-between items-center">
        <div className="text-2xl font-medium">play-it</div>
        <AppBar />
      </div>
      <main>
        {JSON.stringify(session)}
        {JSON.stringify(status)}
      </main>
      ;
    </div>
  );
}
