import Content from "@/components/lolContainer";
import ContentButton from "@/components/ContentButton";
import Navbar from "@/components/server/Navbar";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import getRiotApi from "@/components/server/getRiotAPI";
import ContentContainer from "@/components/server/ContentContainer";
import { Suspense } from "react";

export default async function Index() {
  const lolTier = await getRiotApi();
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <Navbar />
        {/* <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          {isSupabaseConnected && <AuthButton />}
        </div> */}
      </nav>
      <ContentContainer />

      {/* <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div> */}
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          <a href="https://github.com/tonk4tsu">tonk4tsu</a>
        </p>
      </footer>
    </div>
  );
}
