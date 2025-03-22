import Image from "next/image";
import Ritty3DTemp from "@/public/icons/ritty-temp.svg";
import LanguageSelector from "@/components/LanguageSelector";
import GradientBg from "@/public/images/bg-chat-gradient.svg";
import { 메인_양옆_여백 } from "@/pages";
import ChattingSection from "../ChattingSection";

const TopChatSection = () => {
  return (
    <>
      {/* Background Gradient */}
      <Image
        src={GradientBg}
        className="absolute -z-1 top-0 right-0 w-[100vw] h-full bg-cover object-cover"
        alt="gradient background"
      />
      <section
        className="w-full mt-[59px] overflow-hidden relative"
        style={{
          height: "calc(100svh - 59px)",
          padding: `0 ${메인_양옆_여백}px`,
        }}
      >
        <div className="relative w-full h-full">
          <div className="top-0 left-0 w-full h-full flex flex-col items-center py-[30px] ">
            {/* Top 3D 리티 공간 & Language Selector Section */}
            <div className="flex w-full justify-between items-end mb-[18px]">
              <Image src={Ritty3DTemp} alt="ritty temp img"></Image>
              <LanguageSelector />
            </div>
            <ChattingSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopChatSection;
