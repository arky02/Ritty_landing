import Header from "@/components/Header";
import GradientBg from "@/public/images/bg-gradient.svg";
import Image from "next/image";
import Ritty3DTemp from "@/public/icons/ritty-temp.svg";
import LanguageSelector from "@/components/LanguageSelector";
import ChatSection from "@/components/ChatSection";
import HeroImg1 from "@/public/images/heroImg1.png";
import HeroImg2 from "@/public/images/heroImg2.png";
import HeroImg3 from "@/public/images/heroImg3.png";

const 전체_양옆_여백 = "20px";

export default function Landing() {
  return (
    <main className="w-full h-full flex flex-col">
      <Header />
      <section
        className="w-full mt-[59px] overflow-hidden"
        style={{ height: "calc(100svh - 59px)" }}
      >
        <div className="relative w-full h-full">
          <Image
            src={GradientBg}
            className="absolute -z-1 top-0 w-full h-full bg-cover object-cover"
            alt="gradient background"
          />
          <div className="top-0 left-0 w-full h-full flex flex-col items-center px-[20px] py-[30px] ">
            {/* Top 3D 리티 공간 & Language Selector Section */}
            <div className="flex w-full justify-between items-end mb-[18px]">
              <Image src={Ritty3DTemp} alt="ritty temp img"></Image>
              <LanguageSelector />
            </div>
            <ChatSection />
          </div>
        </div>
      </section>
      <div
        className={`flex flex-col items-center w-full h-[calc(100%-40px)] bg-white pt-[33px] px-[${전체_양옆_여백}]`}
      >
        <h2 className="text-[30px] my-[35px] font-[Jalnan] w-fit text-center">
          내 손 안의
          <br />
          반려 고양이, <span className="text-main">리티</span>
        </h2>
        {/* HERO CARD SECTION */}
        <section className="max-w-[620px] flex flex-col items-center rounded-[32px] border-[2px] border-[#DFDEFF] bg-[#ffffff7a] pt-[33px] px-[8px]">
          <div className="px-[11.5px] py-[5px] text-[14px] font-bold bg-[#FFCF4B] rounded-full text-white w-fit">
            KEY POINT 1
          </div>
          <div className="bg-gradient-to-r from-[#4F89FF] via-[#706CFF] to-[#8766FF] bg-clip-text font-extrabold text-[22px] text-transparent mt-[22px] mb-[10px] text-center leading-[1.3]">
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
            width={400}
          ></Image>
        </section>
      </div>
      <div className="flex flex-col items-center w-full  h-[calc(100%-40px)] bg-white pt-[33px] px-[16.5px]">
        {/* HERO CARD SECTION */}
        <section className="max-w-[620px] flex flex-col items-center rounded-[32px] border-[2px] border-[#DFDEFF] bg-[#ffffff7a] pt-[33px] px-[8px]">
          <div className="px-[11.5px] py-[5px] text-[14px] font-bold bg-[#FFCF4B] rounded-full text-white w-fit">
            KEY POINT 2
          </div>
          <div className="bg-gradient-to-r from-[#4F89FF] via-[#706CFF] to-[#8766FF] bg-clip-text font-extrabold text-[22px] text-transparent mt-[22px] mb-[10px] text-center leading-[1.3]">
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
            width={400}
          ></Image>
        </section>
      </div>
      <div className="flex flex-col items-center w-full h-[calc(100%-40px)] bg-white pt-[33px] px-[16.5px]">
        {/* HERO CARD SECTION */}
        <section className="max-w-[620px] flex flex-col items-center rounded-[32px] border-[2px] border-[#DFDEFF] bg-[#ffffff7a] pt-[33px] px-[8px]">
          <div className="px-[11.5px] py-[5px] text-[14px] font-bold bg-[#FFCF4B] rounded-full text-white w-fit">
            KEY POINT 3
          </div>
          <div className="bg-gradient-to-r from-[#4F89FF] via-[#706CFF] to-[#8766FF] bg-clip-text font-extrabold text-[22px] text-transparent mt-[22px] mb-[10px] text-center leading-[1.3]">
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
            width={400}
          ></Image>
        </section>
      </div>
    </main>
  );
}
