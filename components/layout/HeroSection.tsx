import Image from "next/image";
import { 메인_양옆_여백 } from "@/pages";
import HeroImg1 from "@/public/images/heroImg1.png";
import HeroImg2 from "@/public/images/heroImg2.png";
import HeroImg3 from "@/public/images/heroImg3.png";
import HeroImg2PC from "@/public/images/heroImg2_PC.png";
import HeroImg3PC from "@/public/images/heroImg3_PC.png";
import DownloadAppStoreIcon from "@/public/icons/download-btn-appstore.png";
import DownloadPlayStoreIcon from "@/public/icons/download-btn-playstore.png";
import { BreakLinedTextSpan } from "../BreakLinedTextSpan";
import HeroGradientBg from "@/public/images/bg-hero-gradient.svg";
import HeroGradientBgPC from "@/public/images/bg-hero-gradient_PC.svg";

const CARD_TEXT = {
	CARD_1: {
		NO: 1,
		TITLE: ["고양이별에서 찾아온", "특별한 고양이 리티"],
		DESCRIPTION: [
			"리티는 우주에서 사람들의 친구가 되기 위해",
			"지구로 찾아온 특별한 고양이 친구예요!",
			"리티와 대화하고 상호작용해요!",
		],
	},
	CARD_2: {
		NO: 2,
		TITLE: ["리티의 집사가 되어", "리티를 잘 돌봐주세요!"],
		DESCRIPTION: [
			"리티가 배고프거나 심심하지 않게 밥을 주고",
			"대화해주세요. 만약 리티를 방치하면",
			"리티가 고양이별로 돌아가버릴거예요.",
		],
	},
	CARD_3: {
		NO: 3,
		TITLE: ["리티와 대화하며", "둘 도 없는 친구가 되어요"],
		DESCRIPTION: ["리티는 언제나 그 자리에서", "나를 기다리고 기억해요."],
	},
} as const;

const HeroCardSection = ({
	cardData,
	children,
}: {
	cardData: (typeof CARD_TEXT)[keyof typeof CARD_TEXT];
	children?: React.ReactNode;
}) => {
	return (
		<section
			className={`md:max-w-[1000px] w-full h-[630px] md:h-[615px] flex flex-col md:flex-row justify-between items-center md:items-end rounded-[32px] border-[2px] border-[#DFDEFF] bg-[#ffffffB2] pt-[35px] md:p-0`}
			id={cardData.NO % 2 === 0 ? "hero_section_even" : "hero_section_odd"}>
			<div className="flex flex-col items-center md:items-start h-fit justify-end w-fit md:m-[55px]">
				{/* KEY POINT TEXT */}
				<div className="px-[11.5px] py-[5px] text-[14px] md:text-[15px] font-bold bg-[#FFCF4B] rounded-full text-white w-fit">
					KEY POINT {cardData.NO}
				</div>
				{/* HERO TITLE */}
				<p className="bg-gradient-to-r from-[#4F89FF] via-[#706CFF] to-[#8766FF] bg-clip-text font-extrabold text-[22px] md:text-[40px] text-transparent mt-[22px] mb-[15px] text-center md:text-start leading-[1.3]">
					<BreakLinedTextSpan textList={cardData.TITLE} />
				</p>
				{/* HERO DESCRIPTION */}
				<p className="text-[14px] md:text-[18px] leading-[1.5] text-[#6C7889] font-medium text-center md:text-start">
					<BreakLinedTextSpan textList={cardData.DESCRIPTION} />
				</p>
			</div>
			{/* Hero Image */}
			{children}
		</section>
	);
};

const HeroSection = () => {
	return (
		<>
			{/* Background Gradient */}
			<div className="relative w-full h-[1px]">
				<Image
					src={HeroGradientBg}
					className="md:hidden absolute -z-1 w-full bg-cover object-cover left-0"
					alt="gradient background"
				/>
				<Image
					src={HeroGradientBgPC}
					className="hidden md:block absolute -z-1 w-full bg-cover object-cover left-0"
					alt="gradient background"
				/>
			</div>
			<section
				className="w-full h-full flex flex-col items-center gap-[55px] md:gap-[50px]"
				style={{
					padding: `0 ${메인_양옆_여백}px`,
				}}>
				<div
					className={`flex flex-col items-center w-full h-[calc(100%-40px)] bg-transparent`}>
					<h2 className="text-[30px] md:text-[45px] mt-[90px] md:mt-[80px] mb-[70px] md:mb-[50px] font-[Jalnan] w-fit text-center">
						내 손 안의 <br className="md:hidden" />
						반려 고양이, <span className="text-main">리티</span>
					</h2>
					{/* HERO CARD SECTION */}
					<HeroCardSection cardData={CARD_TEXT.CARD_1}>
						<Image
							src={HeroImg1}
							alt="introduction hero1"
							width={320}
							className="mt-[12px] md:mr-[30px] md:w-[450px]"
						/>
					</HeroCardSection>
				</div>
				<div
					className={`flex flex-col items-center w-full h-[calc(100%-40px)] bg-transparent`}>
					{/* HERO CARD SECTION */}
					<HeroCardSection cardData={CARD_TEXT.CARD_2}>
						<section className="md:h-full h-fit flex items-start">
							<Image
								src={HeroImg2}
								alt="introduction hero2"
								width={360}
								className="md:hidden mb-[10px]"
							/>
							<Image
								src={HeroImg2PC}
								alt="introduction hero2"
								width={473}
								className="md:block hidden md:ml-[50px]"
							/>
						</section>
					</HeroCardSection>
				</div>
				<div
					className={`flex flex-col items-center w-full  h-[calc(100%-40px)] bg-transparent`}>
					{/* HERO CARD SECTION */}
					<HeroCardSection cardData={CARD_TEXT.CARD_3}>
						<section className="md:h-full h-fit flex items-start">
							<Image
								src={HeroImg3}
								alt="introduction hero3"
								width={350}
								className="md:hidden mb-[10px]"
							/>
							<Image
								src={HeroImg3PC}
								alt="introduction hero3"
								width={529}
								className="md:block hidden md:mr-[30px] md:-ml-[30px]"
							/>
						</section>
					</HeroCardSection>
				</div>
			</section>
			<div className="flex flex-col w-full items-center gap-[32px] mt-[70px] mb-[100px]">
				<h2 className="text-[28px] md:text-[44px] leading-[1.6] font-extrabold tracking-[3%] text-center">
					세상에 단 하나뿐인
					<br />
					나만의 고양이,
					<br className="md:hidden" />
					리티 만나러가기
				</h2>
				<div className="flex gap-[20px]">
					<Image
						src={DownloadAppStoreIcon}
						width={122}
						className="md:w-[160px] w-[122px]"
						alt="download on the app store"></Image>
					<Image
						src={DownloadPlayStoreIcon}
						width={122}
						className="md:w-[160px] w-[122px]"
						alt="get it on google play"></Image>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
