import Link from "next/link";
import Image from "next/image";

const HomePage = ({ data }) => (
  <main>
    {data.map((ev) => (
      <Link
        key={ev.id}
        href={`/events/${ev.id}`}
      >
        <Image
          width={200}
          height={200}
          src={ev.image}
          alt={ev.title}
        />
        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
      </Link>
    ))}
  </main>
);

export default HomePage;
