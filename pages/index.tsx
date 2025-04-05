import Header from "@/components/Header";
import HeroSection from "@/components/layout/HeroSection";
import TopChatSection from "@/components/layout/ChatSection";
import FooterSection from "@/components/layout/FooterSection";
import cookie from "js-cookie";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // ES Modules
import makeToken from "@/utils/makeJwtToken";
export const 메인_양옆_여백 = 20;

export default function Landing() {
	useEffect(() => {
		const userToken = cookie.get("user-uuid");
		if (!userToken) {
			const userUuid = uuidv4();
			cookie.set("user-uuid", makeToken({ id: `sammeows-${userUuid}` }));
		}
	}, []);

	return (
		<main className={`w-full h-full flex flex-col items-center`}>
			<Header />
			<TopChatSection />
			<div className="flex flex-col items-center w-full h-full md:bg-[url('/images/bg-hero-gradient_PC.svg')] bg-[url('/images/bg-hero-gradient_PC.svg')] bg-cover bg-center">
			<HeroSection />
			<FooterSection />
			</div>
		</main>
	);
}
