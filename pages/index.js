import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const {isAuthenticated ,logout} = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div>
      <Head>
        <title> Meta web3 dApp </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> wellcome to the app {process.env.NEXT_PUBLIC_APP_ID} </h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
