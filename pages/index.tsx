import Header from "@/components/Header";
import GradientBg from "@/public/icons/bg-gradient.svg";
import Image from "next/image";
import Ritty3DTemp from "@/public/icons/ritty-temp.svg";
import LanguageSelector from "@/components/LanguageSelector";
import ChatSection from "@/components/ChatSection";
export default function Landing() {
  return (
    <main className="w-full h-full flex flex-col">
      <Header />
      <section
        className="w-full mt-[64px] overflow-hidden"
        style={{ height: "calc(100dvh - 63px)" }}
      >
        <div className="relative w-full h-full">
          <Image
            src={GradientBg}
            className="absolute -z-1 top-0 w-full h-full bg-cover object-cover"
            alt="gradient background"
          />
          <div className=" top-0 left-0 w-full h-full flex flex-col items-center px-[20px] py-[30px] ">
            {/* Top 3D 리티 공간 & Language Selector Section */}
            <div className="flex w-full justify-between items-end mb-[18px]">
              <Image src={Ritty3DTemp} alt="ritty temp img"></Image>
              <LanguageSelector />
            </div>
            <ChatSection />
          </div>
        </div>
      </section>
      <section
        className="overflow-hidden"
        style={{ height: "calc(100vh - 63px)" }}
      >
        <div className="mt-[64px] w-full h-[calc(100%-40px)] bg-white">
          sfsfsf
        </div>
      </section>
    </main>
  );
}
