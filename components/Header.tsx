import Image from "next/image";
import TextLogo from "@/public/icons/text-logo.svg";

const Header = () => {
  return (
    <header className="w-full top-0 flex justify-between items-center p-[12px] text-white border-b-[1px] border-[#E7E9EF] fixed z-99 backdrop-blur-sm bg-[#ffffffd5]">
      <Image src={TextLogo} alt="ritty-text-logo" className="-mt-1"></Image>
      <button className="bg-gradient-to-r from-[#4F89FF] to-[#8766FF] px-[10px] py-[8px] rounded-[10px] font-bold text-[12px]">
        리티 입양하기
      </button>
    </header>
  );
};
export default Header;
