import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({endOfMessagesRef}) {
  const { user, Moralis } = useMoralis();
  const [msg, setMsg]  = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
  if(!msg) return;
  const Messages =Moralis.Object.extend("Messages");
  const messages=new Messages();
  messages.save({
    message:msg,
    username:user.getUsername(),
    ethAdress:user.get('ethAdress')
  }).then((message)=>{
    //the message sendsuccessfuly
  },
  (error)=>{
    //the save faild 
    //moralis error with error code
    console.log(error.message);
  })
  endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  setMsg("");
  };

  return (
    <form
      className="flex w-11/12 fixed bottom-10
     opacity-80 bg-black px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400 "
    >
      <input
        className="flex-grow outline-none bg-transparent text-white  placeholder-gray-500 pr-5"
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
