import { GeistSans } from "geist/font";
import "@/app/globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "偽中国語",
  description: "",
};

export default function SNSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
