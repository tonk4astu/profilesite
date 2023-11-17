import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import Content from "@/components/Content";
import ContentButton from "@/components/ContentButton";
import Header from "@/components/Header";
import Navbar from "@/components/sever/Navbar";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Router } from "next/router";
import AuthButton from "../components/AuthButton";
import DeployButton from "../components/DeployButton";
import getRiotApi from "@/components/sever/getRiotAPI";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import getSpotifyAccessToken from "@/components/sever/getSpotifyAccessToken";

export default async function Index() {
  const lolTier = await getRiotApi();
  await getSpotifyAccessToken();
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
      <ContentButton />
      <Content tier={lolTier} />

      {/* <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div> */}
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          <a href="https://github.com/tonk4astu">tonk4tsu</a>
        </p>
      </footer>
    </div>
  );
}
