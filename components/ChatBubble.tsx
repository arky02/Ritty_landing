import RittyChatProfile from "@/public/icons/ritty-chat-profile.svg";
import Image from "next/image";

const UserChatBubble = ({ msg }: { msg: string }) => {
  return (
    <div className="inline-block w-fit text-sm relative mx-0 md:my-[15px] my-[8px] bg-main float-right clear-both text-white py-[8px] px-[13px] rounded-[.875rem_.875rem_0_.875rem]">
      {msg}
    </div>
  );
};

const RittyChatBubble = ({ msg }: { msg: string }) => {
  return (
    <div className="inline-block w-fit text-sm relative bg-white float-left clear-both text-[#000000] py-[8px] px-[13px] rounded-[.875rem_.875rem_.875rem_0] border-[1.4px] border-[#E7E9EF]">
      {msg}
    </div>
  );
};
function ChatBubble({ sender, msg }: { sender: string; msg: string[] }) {
  return sender === "user" ? (
    // User Message
    <div>
      {msg.map((userMsg) => (
        <UserChatBubble msg={userMsg} />
      ))}
    </div>
  ) : (
    // Ritty Message
    <div className="flex w-fit items-end w-full">
      <Image
        src={RittyChatProfile}
        width={35}
        height={35}
        className="bg-contain h-[35px] mr-[10px]"
        alt="ritty-chat-profile"
      />
      <div className="flex flex-col gap-[2px]">
        {msg.map((rittyMsg) => (
          <RittyChatBubble msg={rittyMsg} />
        ))}
      </div>
    </div>
  );
}

export default ChatBubble;
