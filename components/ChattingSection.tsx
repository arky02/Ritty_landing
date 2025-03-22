import { useState } from "react";
import Image from "next/image";
import ChatBubble from "./ChatBubble";
import SendBtnIcon from "@/public/icons/send-btn.svg";
import { BreakLinedTextSpan } from "./BreakLinedTextSpan";
import { send } from "process";

const DEFAULT_WELCOMING_SECTION_TEXT = [
  "리티와 채팅을",
  "시작해보세요!",
] as const;

const INITIAL_RITTY_MSG = [
  {
    id: "RITTY",
    content: ["안녕 나는 우주고양이 리티야!", "집사는 이름이 뭐냥? 😻"],
  },
];

const ChattingSection = () => {
  const [text, setText] = useState("");
  const [isChatValid, setIsChatValid] = useState(false);
  const [msgList, setMsgList] = useState(INITIAL_RITTY_MSG);

  const sendMyText = () => {
    if (!text) return;
    msgList[msgList.length - 1].id === "user"
      ? setMsgList((msgList) => {
          msgList[msgList.length - 1].content.push(text);
          return msgList;
        })
      : setMsgList([
          ...msgList,
          {
            id: "user",
            content: [text],
          },
        ]);
    setText("");
  };

  return (
    <div
      className="w-full flex flex-col justify-between gap-[12px]"
      style={{ height: "calc(100svh - 320px)" }}
    >
      {/* 채팅 영역 */}
      <section className="relative h-full w-full -mr-[7px]">
        {msgList.filter((msg) => msg.id === "user").length === 0 && (
          <BreakLinedTextSpan
            textList={DEFAULT_WELCOMING_SECTION_TEXT}
            className="absolute top-1/2 -translate-y-1/2 w-full font-[Jalnan] text-[30px] md:text-[46px] text-center text-[#BDBAFF] leading-[1.6]"
          />
        )}

        <div className="h-full w-full overflow-y-scroll pr-[7px]">
          {msgList.length > 0 &&
            msgList.map((msgEl, idx) => (
              <ChatBubble sender={msgEl?.id} msg={msgEl?.content} />
            ))}
        </div>
      </section>
      {/* 채팅 입력창 */}
      <section className="relative justify-between items-center w-full h-[50px]">
        <input
          className="w-full h-[50px] resize-none rounded-[18px] px-[16px] bg-[#2c2d381e] my-[5px] text-[16px] md:text-[16px] flex items-center text-black placeholder-white "
          placeholder={"안녕, 리티!"}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // 엔터키 입력 시 새로고침 방지
              sendMyText(); // 엔터키 입력 시 메시지 전송
            }
          }}
        />

        {/* 채팅 전송 버튼 */}
        <button
          title="send my msg"
          id="send"
          className="absolute top-[13px] right-[9px] cursor-pointer border-[none]"
          onClick={sendMyText}
          // disabled={!isChatValid}
        >
          <Image src={SendBtnIcon} width={34} height={34} alt="send" />
        </button>
      </section>
    </div>
  );
};
export default ChattingSection;
