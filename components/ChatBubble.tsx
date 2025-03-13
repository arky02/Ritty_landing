import RittyChatProfile from "@/public/icons/ritty-chat-profile.svg";
import Image from "next/image";

function ChatBubble({ sender, msg }: { sender: string; msg: string }) {
  return sender === "user" ? (
    // User Message
    <div className="inline-block w-fit text-sm relative mx-0 md:my-[15px] my-[8px] bg-main float-right clear-both text-white py-[8px] px-[13px] rounded-[.875rem_.875rem_0_.875rem]">
      {msg}
    </div>
  ) : (
    // Ritty Message
    <div className="flex w-fit items-center w-full">
      <Image
        src={RittyChatProfile}
        width={35}
        height={35}
        className="bg-contain h-[35px] mr-[10px]"
        alt="ritty-chat-profile"
      />
      <div className="inline-block w-fit text-sm relative mx-0 my-[10px] bg-white float-left clear-both text-[#000000] py-[8px] px-[13px] rounded-[.875rem_.875rem_.875rem_0] border-[1.4px] border-[#E7E9EF]">
        {msg === "ritty_loading_msg" ? (
          // Loading Message
          <div className="flex space-x-1 justify-center items-center  p-[7.2px] ">
            <div className="h-[6px] w-[6px] bg-[#919191] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-[6px] w-[6px] bg-[#919191] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-[6px] w-[6px] bg-[#919191] rounded-full animate-bounce"></div>
          </div>
        ) : (
          msg
        )}
      </div>
    </div>
  );
}

export default ChatBubble;
