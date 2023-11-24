import Link from "next/link";

export default function ChinaSNS() {
  return (
    <>
      <Header />
    </>
  );
}

const Header = () => {
  return (
    <div className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="flex justify-between items-center mx-4">
        <p>偽中国語SNS</p>
        <Link
          href="/login"
          className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

const login = () => {
  //ログイン処理
};
