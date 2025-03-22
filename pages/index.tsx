import Header from "@/components/Header";
import GradientBg from "@/public/images/bg-chat-gradient.svg";
import Image from "next/image";
import Ritty3DTemp from "@/public/icons/ritty-temp.svg";
import LanguageSelector from "@/components/LanguageSelector";
import ChatSection from "@/components/ChatSection";
import HeroImg1 from "@/public/images/heroImg1.png";
import HeroImg2 from "@/public/images/heroImg2.png";
import HeroImg3 from "@/public/images/heroImg3.png";
import HeroGradientBg from "@/public/images/bg-hero-gradient.svg";
import DownloadAppStoreIcon from "@/public/icons/download-btn-appstore.png";
import DownloadPlayStoreIcon from "@/public/icons/download-btn-playstore.png";
import SamMeowsLogo from "@/public/icons/sam-meows-logo.svg";
import DiscordBtnIcon from "@/public/icons/discord-btn.svg";
import InstagramBtnIcon from "@/public/icons/instagram-btn.svg";

const 메인_양옆_여백 = 20;

export default function Landing() {
  return (
    <main className={`w-full h-full flex flex-col`}>
      <Header />
      <Image
        src={GradientBg}
        className="absolute -z-1 top-0 right-0 w-[100vw] h-full bg-cover object-cover"
        alt="gradient background"
      />
      <section
        className={`w-full mt-[59px] overflow-hidden relative px-[${메인_양옆_여백}px]`}
        style={{ height: "calc(100svh - 59px)" }}
      >
        <div className="relative w-full h-full">
          <div className="top-0 left-0 w-full h-full flex flex-col items-center py-[30px] ">
            {/* Top 3D 리티 공간 & Language Selector Section */}
            <div className="flex w-full justify-between items-end mb-[18px]">
              <Image src={Ritty3DTemp} alt="ritty temp img"></Image>
              <LanguageSelector />
            </div>
            <ChatSection />
          </div>
        </div>
      </section>
      <div className="relative w-full h-[1px]">
        <Image
          src={HeroGradientBg}
          className="absolute -z-1 w-full bg-cover object-cover left-0"
          alt="gradient background"
        ></Image>
      </div>
      <section
        className={`w-full h-full flex flex-col items-center gap-[55px] px-[${메인_양옆_여백}px]`}
      >
        <div
          className={`flex flex-col items-center w-full h-[calc(100%-40px)] bg-transparent`}
        >
          <h2 className="text-[30px] mt-[77px] mb-[70px] font-[Jalnan] w-fit text-center">
            내 손 안의
            <br />
            반려 고양이, <span className="text-main">리티</span>
          </h2>
          {/* HERO CARD SECTION */}
          <section className="md:max-w-[620px] w-full flex flex-col items-center rounded-[32px] border-[2px] border-[#DFDEFF] bg-[#ffffffB2] pt-[33px] px-[8px]">
            <div className="px-[11.5px] py-[5px] text-[14px] font-bold bg-[#FFCF4B] rounded-full text-white w-fit">
              KEY POINT 1
            </div>
            <div className="bg-gradient-to-r from-[#4F89FF] via-[#706CFF] to-[#8766FF] bg-clip-text font-extrabold text-[22px] text-transparent mt-[22px] mb-[12px] text-center leading-[1.3]">
              고양이별에서 찾아온
              <br />
              특별한 고양이 리티
            </div>
            <p className="text-[14px] leading-[1.5] text-[#6C7889] font-medium text-center mb-[12px]">
              리티는 우주에서 사람들의 친구가 되기 위해
              <br />
              지구로 찾아온 특별한 고양이 친구예요!
              <br />
              리티와 대화하고 상호작용해요!
            </p>
            <Image
              src={HeroImg1}
              alt="ritty introduction hero1"
              width={320}
            ></Image>
          </section>
        </div>
        <div
          className={`flex flex-col items-center w-full h-[calc(100%-40px)] bg-transparent`}
        >
          {/* HERO CARD SECTION */}
          <section className="md:max-w-[620px] w-full flex flex-col items-center rounded-[32px] border-[2px] border-[#DFDEFF] bg-[#ffffffB2] pt-[33px] px-[8px]">
            <div className="px-[11.5px] py-[5px] text-[14px] font-bold bg-[#FFCF4B] rounded-full text-white w-fit">
              KEY POINT 2
            </div>
            <div className="bg-gradient-to-r from-[#4F89FF] via-[#706CFF] to-[#8766FF] bg-clip-text font-extrabold text-[22px] text-transparent mt-[22px] mb-[12px] text-center leading-[1.3]">
              리티의 집사가 되어
              <br />
              리티를 잘 돌봐주세요!
            </div>
            <p className="text-[14px] leading-[1.5] text-[#6C7889] font-medium text-center">
              리티가 배고프거나 심심하지 않게 밥을 주고
              <br />
              대화해주세요. 만약 리티를 방치하면
              <br />
              리티가 고양이별로 돌아가버릴거예요.
            </p>
            <Image
              src={HeroImg2}
              alt="ritty introduction hero2"
              width={350}
            ></Image>
          </section>
        </div>
        <div
          className={`flex flex-col items-center w-full  h-[calc(100%-40px)] bg-transparent`}
        >
          {/* HERO CARD SECTION */}
          <section className="md:max-w-[620px] w-full flex flex-col items-center rounded-[32px] border-[2px] border-[#DFDEFF] bg-[#ffffffB2] pt-[33px] px-[8px]">
            <div className="px-[11.5px] py-[5px] text-[14px] font-bold bg-[#FFCF4B] rounded-full text-white w-fit">
              KEY POINT 3
            </div>
            <div className="bg-gradient-to-r from-[#4F89FF] via-[#706CFF] to-[#8766FF] bg-clip-text font-extrabold text-[22px] text-transparent mt-[22px] mb-[12px] text-center leading-[1.3]">
              리티와 대화하며
              <br />둘 도 없는 친구가 되어요
            </div>
            <p className="text-[14px] leading-[1.5] text-[#6C7889] font-medium text-center z-1">
              리티는 언제나 그 자리에서
              <br />
              나를 기다리고 기억해요.
            </p>
            <Image
              src={HeroImg3}
              alt="ritty introduction hero3"
              width={350}
            ></Image>
          </section>
        </div>
      </section>
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
