import Image from "next/image";
import Ritty3DTemp from "@/public/icons/ritty-temp.svg";
import LanguageSelector from "@/components/LanguageSelector";
import GradientBg from "@/public/images/bg-chat-gradient.svg";
import { 메인_양옆_여백 } from "@/pages";
import ChattingSection from "../ChattingSection";
import * as THREE from 'three';
import ThreeJSRitty from "./ThreeJsRitty";

const TopChatSection = () => {
	return (
		<div
			className="w-full mt-[63px] overflow-hidden relative bg-[url('/images/bg-chat-gradient.svg')] bg-cover bg-center"
			style={{
				height: "calc(100svh - 63px)",
				padding: `0 ${메인_양옆_여백}px`,
			}}>
			<div className="w-full flex flex-col">

				{/* Top 3D 리티 공간 & Language Selector Section */}
				<section className="flex w-full h-[200px] justify-between items-end mb-[20px]">
					<ThreeJSRitty />
					{/* <Image src={Ritty3DTemp} height={180} alt="ritty temp img"></Image> */}
					<LanguageSelector />
				</section>

				{/* Chatting Section */}
				<section className="h-full">
					<ChattingSection />
				</section>
			</div>
		</div>
	);
};

export default TopChatSection;
