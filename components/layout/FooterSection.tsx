import Image from "next/image";
import SamMeowsLogo from "@/public/icons/sam-meows-logo.svg";
import DiscordBtnIcon from "@/public/icons/discord-btn.svg";
import InstagramBtnIcon from "@/public/icons/instagram-btn.svg";
import { 메인_양옆_여백 } from "@/pages";

const FooterSection = () => {
  return (
    <div
      className="w-full md:max-w-[1000px]"
      style={{
        padding: `0 ${메인_양옆_여백}px 90px`,
      }}
    >
      {/* 구분 선 */}
      <div className="h-[1px] bg-[#e7e9ef] mb-[30px]" />
      <footer className="flex flex-col md:flex-row-reverse justify-between items-start">
        <Image src={SamMeowsLogo} alt="sammeows logo" />
        <section>
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
            <Image
              src={DiscordBtnIcon}
              width={32}
              height={32}
              alt="sammeows discord button"
            ></Image>
            <Image
              src={InstagramBtnIcon}
              width={32}
              height={32}
              alt="sammeows instagram button"
            ></Image>
          </div>
        </section>
      </footer>
    </div>
  );
};
export default FooterSection;
