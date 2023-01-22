import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header>
    <div className="navContiner">
      <Image
        src={"/images/next.svg"}
        width={50}
        height={50}
        alt="logo"
      />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
