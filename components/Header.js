import Image from "next/image";
import { useMoralis } from "react-moralis";

function Header() {
  const { user } = useMoralis();
  return (
    <div>
      <div>
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image src="https://links.papareact.com/3pi" objectFit="cover" layout="fill" className="rounded-full" />
        </div>
        <div>
            {/* avatar */}
            {/*wellcome message */}
            {/*user name */}
            {/*change user name component  */}
        </div>
      </div>
      <h1 className="text-white"> I am the header {user.id} </h1>
    </div>
  );
}

export default Header;
