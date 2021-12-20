import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative text-white">
      <h1> hello this is login</h1>
      <div className="absolute z-50 space-y-6 flex flex-col h-4/6 w-full items-center justify-center">
        <Image className="rounded-full object-cover" src="https://links.papareact.com/3pi" height={200} width={200} />
        <button className="bg-yellow-500 p-2 font-bold rounded-lg animate-pulse text-slate-600"> Login to the world</button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
