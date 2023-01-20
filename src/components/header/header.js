import Link from "next/link";

const Header = ({ styles }) => (
  <header>
    <nav>
      {/*<img />*/}
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/about">About</Link>
    </nav>
  </header>
);

export default Header;
