import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";

export default function Home() {
  const { isAuthenticated, logout, user } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden ">
      <Head>
        <title> Meta web3 dApp </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="max-w-screen-2xl mx-auto">
          <Header />
          {/* messages */}
        </div>
      <button
        className="text-black bg-yellow-300 rounded-lg p-5 font-bold animate-pulse"
        onClick={logout}
      >
        Log out
      </button>
    </div>
  );
}
