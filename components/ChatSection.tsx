import { useState } from "react";
import ChatBubble from "./ChatBubble";

const msgList = [
  { id: "user", content: "안녕하세요" },
  { id: "ritty", content: "안녕하세요" },
  { id: "user", content: "안녕하세요" },
  { id: "ritty", content: "안녕하세요" },
  { id: "user", content: "안녕하세요" },
  { id: "ritty", content: "안녕하세요" },
  { id: "user", content: "안녕하세요" },
  { id: "ritty", content: "안녕하세요" },
  { id: "user", content: "안녕하세요" },
  { id: "ritty", content: "안녕하세요" },
  { id: "user", content: "안녕하세요" },
  { id: "ritty", content: "안녕하세요" },
  { id: "user", content: "안녕하세요" },
  { id: "ritty", content: "안녕하세요" },
  { id: "user", content: "안녕하세요" },
  { id: "ritty", content: "안녕하세요" },
];

const ChatSection = () => {
  const [text, setText] = useState("");
  const [isChatValid, setIsChatValid] = useState(false);

  return (
    <div
      className="w-full h-full flex flex-col gap-[12px]"
      style={{ height: "calc(100svh - 380px)" }}
    >
      {/* 채팅 영역 */}
      <section className="h-full w-full">
        <div className="h-full w-full overflow-y-scroll px-[18px]">
          {msgList.length > 0 &&
            msgList.map((msgEl, idx) =>
              ChatBubble({
                sender: msgEl?.id,
                msg: msgEl?.content,
              })
            )}
        </div>
      </section>

      {/* 채팅 입력창 */}
      <section className="md:flex justify-between items-center w-full h-[50px]">
        <input
          className="w-full h-[50px] resize-none rounded-[18px] px-[16px] bg-[#2c2d381e] my-[5px] text-[14px] md:text-[16px] flex items-center text-white placeholder-white "
          placeholder={"안녕, 리티!"}
          value={text}
          // text={text}
          onChange={(e) => {
            setText(e.target.value);
            // sendMyTextByEnter(e);
          }}
        ></input>

        <button
          id="send"
          className="absolute right-[24px] md:top-[22px] top-[20px] bg-transparent cursor-pointer border-[none]"
          // onClick={sendMyText}
          disabled={!isChatValid}
        >
          {/* <img src={Send} width="34" height="34" /> */}
        </button>
      </section>
    </div>
  );
};
export default ChatSection;
