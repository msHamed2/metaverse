import Image from "next/image";
import { useMoralis } from "react-moralis";


function Login() {
  const {authenticate} = useMoralis();
  return (
    <div className=" bg-black relative text-white ">
     

      <div className="flex flex-col absolute z-50 w-full h-4/6  items-center justify-center space-y-4">
          <Image 
          className="object-cover rounded-full"
           src="https://links.papareact.com/3pi"
          width={200} height={200}
           />
           <button
           onClick={authenticate}
            className="text-black bg-yellow-300 rounded-lg p-5 font-bold animate-pulse">
              Login to The MetaVerse 
              </button>

      </div>
      <div className="w-full h-screen">
          <Image 
          src="https://links.papareact.com/55n" 
          layout='fill' 
          objectFit="cover"
           />
      </div>
    </div>
  );
}

export default Login;
