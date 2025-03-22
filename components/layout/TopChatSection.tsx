import Image from "next/image";
import Ritty3DTemp from "@/public/icons/ritty-temp.svg";
import LanguageSelector from "@/components/LanguageSelector";
import ChatSection from "@/components/ChatSection";
import HeroGradientBg from "@/public/images/bg-hero-gradient.svg";
import GradientBg from "@/public/images/bg-chat-gradient.svg";
import { 메인_양옆_여백 } from "@/pages";

const TopChatSection = () => {
  return (
    <>
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
    </>
  );
};

export default TopChatSection;
