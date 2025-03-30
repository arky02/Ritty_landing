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
				className="w-full mt-[63px] overflow-hidden relative"
				style={{
					height: "calc(100svh - 63px)",
					padding: `0 ${메인_양옆_여백}px`,
				}}>
				<div className="w-full flex flex-col">
					{/* Top 3D 리티 공간 & Language Selector Section */}
					<div className="flex w-full h-[180px] justify-between items-end my-[20px]">
						<Image src={Ritty3DTemp} height={180} alt="ritty temp img"></Image>
						<LanguageSelector />
					</div>
					<div className="h-full">
						<ChattingSection />
					</div>
				</div>
			</section>
		</>
	);
};

export default TopChatSection;
