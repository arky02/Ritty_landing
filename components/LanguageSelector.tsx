import { useState } from "react";

type LanguageType = "KOR" | "ENG";

const LanguageSelector = () => {
  const [language, setLanguage] = useState<LanguageType>("KOR");
  return (
    <section className="absolute right-[20px] flex border-[2px] border-white bg-[#F6F6F8] rounded-[20px] h-[38px] w-fit items-center font-medium shadow mb-[20px]">
      <button
        onClick={() => setLanguage("KOR")}
        className="pl-[16px] pr-[10px] text-[14px] h-full cursor-pointer"
        style={{ color: language === "KOR" ? "#2E3238" : "#ACB4C0" }}
      >
        KOR
      </button>
      <span className="font-normal text-[#ACB4C0]">|</span>
      <button
        onClick={() => setLanguage("ENG")}
        className="pr-[16px] pl-[10px] text-[14px] h-full cursor-pointer"
        style={{ color: language === "ENG" ? "#2E3238" : "#ACB4C0" }}
      >
        ENG
      </button>
    </section>
  );
};

export default LanguageSelector;
