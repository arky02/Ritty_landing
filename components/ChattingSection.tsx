import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ChatBubble from "./ChatBubble";
import SendBtnIcon from "@/public/icons/send-btn.svg";
import SendBtnIconDisabled from "@/public/icons/send-btn-disabled.svg";
import { BreakLinedTextSpan } from "./BreakLinedTextSpan";
import axios from "axios";
import cookie from "js-cookie";

const 유저_채팅_전송_대기_ms = 2000;

const DEFAULT_WELCOMING_SECTION_TEXT = [
	"리티와 채팅을",
	"시작해보세요!",
] as const;

const INITIAL_RITTY_MSG = [
	"안녕 나는 우주고양이 리티야!",
	"집사는 이름이 뭐냥? 😻",
];

const LOADING_MSG = {
	id: "RITTY",
	content: ["LOADING_MSG"],
};

type LocalMsgListType = {
	id: string;
	content: string[];
};

const scrollToBottom = (scrollRef: React.RefObject<HTMLDivElement | null>) => {
	if (scrollRef.current) {
		scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
	}
};

const ChattingSection = () => {
	const [text, setText] = useState<string>("");
	const [isChatValid, setIsChatValid] = useState(false);
	const [msgList, setMsgList] = useState<LocalMsgListType[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const newestMsgListRef = useRef<LocalMsgListType[] | null>(null);
	const scrollRef = useRef<HTMLDivElement>(null);

	const sendMsgListToServer = async (newestMsgList: LocalMsgListType[]) => {
		clearSendTimer();

		const userToken = cookie.get("user-uuid");
		if (!userToken) {
			throw Error("no user token!");
		}

		setMsgList((prev) => [...prev, LOADING_MSG]);

		const serverMsgList = newestMsgList
			.map((msgEl: LocalMsgListType) =>
				msgEl.content.map((msg) => ({
					id: msgEl.id,
					content: msg,
					date: "2024-09-01T16:20:48.761Z",
					action: "chat",
				}))
			)
			.flat();

		const response = await axios.post(
			"https://apitest.sam-meows.com/landing/chat",
			{
				data: serverMsgList,
			},
			{
				headers: {
					Authorization: `Bearer ${userToken}`,
				},
			}
		);

		if (response.status === 201 || response.status === 200) {
			const rittyChatResponse = response.data.response;

			rittyChatResponse &&
				setMsgList((prev) => [
					...prev.filter((msg) => msg.content !== LOADING_MSG.content),
					{ id: "RITTY", content: [rittyChatResponse] },
				]);
		}
	};

	const startSendTimer = (newestMsgList: LocalMsgListType[]) => {
		if (!newestMsgListRef.current) newestMsgListRef.current = newestMsgList;

		timeoutRef.current = setTimeout(() => {
			sendMsgListToServer(newestMsgList!);
		}, 유저_채팅_전송_대기_ms);
	};

	const clearSendTimer = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
			newestMsgListRef.current = null;
		}
	};

	const resetSendTimer = () => {
		// 무조건 startSendTimer가 선행 실행된 경우에만 실행
		if (!timeoutRef.current || !newestMsgListRef.current) return;

		const tempMsgList = newestMsgListRef.current;

		clearSendTimer();
		startSendTimer(tempMsgList);
	};

	const updateUserMsgList = async () => {
		if (!text.trim()) return;

		clearSendTimer(); // 기존에 있던 타이머 초기화 (업데이트 된 메세지 리스트로 서버한테 보내야함)

		const newestMsgList =
			msgList[msgList.length - 1].id === "USER"
				? [
						...msgList.slice(0, -1),
						{
							id: "USER",
							content: [...msgList[msgList.length - 1].content, text],
						},
				  ]
				: [
						...msgList,
						{
							id: "USER",
							content: [text],
						},
				  ];

		setMsgList(newestMsgList);
		setText("");
		startSendTimer(newestMsgList);
	};

	useEffect(() => {
		scrollToBottom(scrollRef);
	}, [msgList, msgList.length]);

	useEffect(() => {
		let welcomingStep = 3;

		setTimeout(() => {
			setMsgList([{ id: "RITTY", content: ["LOADING_MSG"] }]);
			const showWelcomingTextInterval = setInterval(() => {
				if (!welcomingStep) {
					clearInterval(showWelcomingTextInterval);
					return;
				}

				let msgContent: string[] = [];

				switch (welcomingStep) {
					case 3:
						msgContent = [INITIAL_RITTY_MSG[0]];
						break;
					case 2:
						msgContent = [INITIAL_RITTY_MSG[0], "LOADING_MSG"];
						break;
					case 1:
						msgContent = [INITIAL_RITTY_MSG[0], INITIAL_RITTY_MSG[1]];
						setIsChatValid(true);
				}
				setMsgList([
					{
						id: "RITTY",
						content: msgContent,
					},
				]);

				--welcomingStep;
			}, 1500);
			return () => clearInterval(showWelcomingTextInterval);
		}, 1000);
	}, []);

	return (
		<div
			className="w-full flex flex-col justify-between"
			style={{
				height: `calc(100svh - 283px)`,
				maxHeight: `calc(100svh - 283px)`,
				resize: "none",
			}}>
			{/* 채팅 영역 */}
			<section
				className="relative flex flex-col gap-[15px] h-full w-full overflow-y-scroll pr-[7px]"
				ref={scrollRef}>
				{/* 채팅 유도 텍스트 */}
				{isChatValid &&
					msgList.filter((msg) => msg.id === "USER").length === 0 && (
						<BreakLinedTextSpan
							textList={DEFAULT_WELCOMING_SECTION_TEXT}
							className="absolute top-1/2 -translate-y-1/2 w-full font-[Jalnan] text-[30px] md:text-[46px] text-center text-[#BDBAFF] leading-[1.6]"
						/>
					)}

				{/* 채팅 버블 */}
				{msgList.length > 0 &&
					msgList.map((msgEl, idx) => (
						<ChatBubble key={idx} sender={msgEl?.id} msg={msgEl?.content} />
					))}
			</section>

			{/* 채팅 입력창 */}
			<section className="relative justify-between items-center w-full h-[50px] my-[15px]">
				<input
					ref={inputRef}
					className="w-full h-[50px] resize-none rounded-[18px] px-[16px] bg-[#2c2d381e] text-[16px] md:text-[16px] flex items-center text-black placeholder-white "
					placeholder={"안녕, 리티!"}
					value={text}
					onChange={(e) => {
						setText(e.target.value);
						resetSendTimer();
					}}
					onKeyUp={(e) => {
						if (e.key === "Enter" && text.trim()) {
							e.preventDefault();
							updateUserMsgList();
						}
					}}
				/>
				{/* 채팅 전송 버튼 */}
				<button
					title="send my msg"
					id="send"
					className="absolute top-[8px] right-[9px] cursor-pointer border-[none]"
					onClick={updateUserMsgList}
					disabled={!isChatValid}>
					{
						<Image
							src={isChatValid ? SendBtnIcon : SendBtnIconDisabled}
							width={34}
							height={34}
							alt="send"
						/>
					}
				</button>
			</section>
		</div>
	);
};
export default ChattingSection;
