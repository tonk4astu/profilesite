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

const Inputform = () => {
  const inputStringValidation = (InputString: string) => {
    // 漢字のみを抽出する正規表現
    const kanjiRegex = /[\u4E00-\u9FFF]/g;

    // マッチした漢字の配列を取得
    const kanjiArray = InputString.match(kanjiRegex);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form action="submitHandler">
        <input type="text" placeholder="投稿内容を入力してください" />
        <button>投稿</button>
      </form>
    </div>
  );
};
const submitHandler = () => {
  "use server";
};
