import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgoo from "timeago-react";

function Message({ message }) {
  const { user } = useMoralis();
  const isUSerMessage = message.get("ethAdress") === user.get("ethAdress");
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUSerMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUSerMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUSerMessage
            ? "rounded-br-none bg-pink-300"
            : " rounded-bl-none bg-blue-400"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <TimeAgoo
        className={`text-[10px] italic text-gray-400 ${
          isUSerMessage && "order-first pr-1"
        }`}
        datetime={message.createdAt}
      />
      <p
        className={`absolute -bottom-5 text-xs ${
          isUSerMessage ? "text-pink-300 " : "text-blue-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
}

export default Message;
