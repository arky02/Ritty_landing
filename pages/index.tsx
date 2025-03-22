import Header from "@/components/Header";

import Image from "next/image";

import DownloadAppStoreIcon from "@/public/icons/download-btn-appstore.png";
import DownloadPlayStoreIcon from "@/public/icons/download-btn-playstore.png";
import SamMeowsLogo from "@/public/icons/sam-meows-logo.svg";
import DiscordBtnIcon from "@/public/icons/discord-btn.svg";
import InstagramBtnIcon from "@/public/icons/instagram-btn.svg";
import HeroSection from "@/components/layout/HeroSection";
import TopChatSection from "@/components/layout/TopChatSection";

export const 메인_양옆_여백 = 20;

export default function Landing() {
  return (
    <main className={`w-full h-full flex flex-col`}>
      <Header />
      <TopChatSection />
      <HeroSection />
      <div className="flex flex-col w-full items-center gap-[32px] mt-[70px] mb-[100px]">
        <h2 className="text-[28px] leading-[1.6] font-extrabold tracking-[3%] text-center">
          세상에 단 하나뿐인
          <br />
          나만의 고양이,
          <br />
          리티 만나러가기
        </h2>
        <div className="flex gap-[20px]">
          <Image
            src={DownloadAppStoreIcon}
            width={122}
            alt="download on the app store"
          ></Image>
          <Image
            src={DownloadPlayStoreIcon}
            width={122}
            alt="get it on google play"
          ></Image>
        </div>
      </div>
      <div
        className={`h-[1px] bg-[#e7e9ef] mx-[${메인_양옆_여백}px]`}
        style={{ width: `calc(100% - ${메인_양옆_여백 * 2}px)` }}
      />
      <footer className={`px-[${메인_양옆_여백}px] pt-[30px] pb-[90px]`}>
        <Image src={SamMeowsLogo} />
        <p className="text-[#757575] mt-[20px] mb-[16px] text-[14px]">
          <span className="text-[#2E3238] font-semibold mb-[14px]">
            주식회사 삼냥이즈
          </span>
          <br />
          대표자: 최소정 <br />
          주소: 충청남도 당진시 수청1로 51 205동 1204호 <br />
          사업자번호: 823-88-03261
          <br />
          ritty.me
        </p>
        <div className="flex gap-[10px]">
          <Image src={DiscordBtnIcon} width={32} height={32}></Image>
          <Image src={InstagramBtnIcon} width={32} height={32}></Image>
        </div>
      </footer>
    </main>
  );
}
