import RittyChatProfile from "@/public/icons/ritty-chat-profile.svg";
import Image from "next/image";

type ChatBubbleType = "top" | "middle" | "bottom";

const CHAT_BUBBLE_RADIUS = {
	RITTY: {
		top: "20px 20px 20px 2px",
		middle: "2px 20px 2px 20px",
		bottom: "2px 20px 20px 20px",
	},
	USER: {
		top: "20px 20px 2px 20px",
		middle: "20px 2px 2px 20px",
		bottom: "20px 2px 20px 20px",
	},
};

const getChatBubbleType = (idx: number, total: number): ChatBubbleType => {
	if (idx === 0) return "top";
	else if (idx + 1 === total) return "bottom";
	else return "middle";
};

const UserChatBubble = ({
	msg,
	type,
}: {
	msg: string;
	type: ChatBubbleType;
}) => {
	return (
		<div
			className="inline-block w-fit min-h-[38px] text-sm relative mx-0 bg-main float-right clear-both text-white py-[8px] px-[13px] border-[1.4px] border-[#a5a1ff]"
			style={{ borderRadius: CHAT_BUBBLE_RADIUS.USER[type] }}>
			{msg}
		</div>
	);
};

const RittyChatBubble = ({
	msg,
	type,
}: {
	msg: string;
	type: ChatBubbleType;
}) => {
	return (
		<div
			className="inline-block w-fit min-h-[38px] text-sm relative bg-white float-left clear-both text-[#000000] py-[8px] px-[13px] border-[1.4px] border-[#E7E9EF]"
			style={{ borderRadius: CHAT_BUBBLE_RADIUS.RITTY[type] }}>
			{msg === "LOADING_MSG" ? <LoadingAnimationMsg /> : msg}
		</div>
	);
};

const LoadingAnimationMsg = () => {
	return (
		<div className="flex space-x-1 justify-center items-center p-[7.2px] ">
			<div className="h-[5px] w-[5px] bg-[#d9d9d9] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
			<div className="h-[5px] w-[5px] bg-[#adadad] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
			<div className="h-[5px] w-[5px] bg-[#636363] rounded-full animate-bounce"></div>
		</div>
	);
};

function ChatBubble({ sender, msg }: { sender: string; msg: string[] }) {
	return sender === "USER" ? (
		// User Message
		<div className="flex flex-col items-end gap-[4px]">
			{msg.map((userMsg, idx) => (
				<UserChatBubble
					msg={userMsg}
					key={idx}
					type={getChatBubbleType(idx, msg.length)}
				/>
			))}
		</div>
	) : (
		// Ritty Message
		<div className="flex w-fit items-end">
			<Image
				src={RittyChatProfile}
				width={35}
				height={35}
				className="bg-contain h-[35px] mr-[10px]"
				alt="ritty-chat-profile"
			/>
			<div className="flex flex-col gap-[2px]">
				{msg.map((rittyMsg, idx) => (
					<RittyChatBubble
						msg={rittyMsg}
						key={idx}
						type={getChatBubbleType(idx, msg.length)}
					/>
				))}
			</div>
		</div>
	);
}

export default ChatBubble;
