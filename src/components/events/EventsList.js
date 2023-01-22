import Link from "next/link";
import Image from "next/image";

const EventsList = ({ data }) => {
  return (
    <div className="events-list">
      <h2>Our Events</h2>
      <div className="evnets-container">
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

export default EventsList;
