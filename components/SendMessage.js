import { useMoralis } from "react-moralis";

function SendMessage() {
    const{user,Moralis} = useMoralis();

  return (
    <form
     className="flex w-11/12 fixed bottom-10
     opacity-80 bg-black px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400 ">
      <input
       className="flex-grow outline-none bg-transparent text-white  placeholder-gray-500 pr-5"  
      type="text"
      placeholder={`Enter a Message ${user.getUsername()}...`}
       />
      <button className="font-bold text-pink-500">Send </button>
    </form>
  );
}

export default SendMessage;
