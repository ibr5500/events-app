import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Header = () => (
  <header className={styles.navbar}>
    <nav>
      {/*<img />*/}
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/about">About</Link>
    </nav>
  </header>
);

export default Header;
