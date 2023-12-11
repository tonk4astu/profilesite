import Image from "next/image";
import profile from "@/public/profileImage/figure_barrier_hemisphere.png";
const ProfileContainer = () => {
  return (
    <div className=" grid grid-cols-2 gap-x-4">
      <Image
        className=""
        src={profile}
        width={100}
        height={100}
        alt="プロフィール画像"
      ></Image>
      <div>
        <p>三沢</p>
        <p>2000年生まれ</p>
      </div>
    </div>
  );
};

export default ProfileContainer;

const ProfileLayout = () => {};
