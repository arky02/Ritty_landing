import Header from "@/components/Header";
import HeroSection from "@/components/layout/HeroSection";
import TopChatSection from "@/components/layout/TopChatSection";
import FooterSection from "@/components/layout/FooterSection";

export const 메인_양옆_여백 = 20;

export default function Landing() {
  return (
    <main className={`w-full h-full flex flex-col items-center`}>
      <Header />
      <TopChatSection />
      <HeroSection />
      <FooterSection />
    </main>
  );
}
