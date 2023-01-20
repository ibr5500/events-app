import Link from "next/link";
import Image from "next/image";

const Events = ({ data }) => {
  return (
    <div>
      <h2>Events list page</h2>
      <div>
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.id}`}
          >
            <Image
              width={300}
              height={300}
              src={ev.image}
              alt={ev.title}
            />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
