import Link from "next/link";
import Image from "next/image";

const Category = ({ data, pageName }) => {
  return (
    <div className="events-category">
      <h1>Events in {pageName}</h1>
      <div className="events-contents">
        {data.map((ev) => (
          <Link
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
          >
            <Image
              width={200}
              height={200}
              src={ev.image}
              alt={ev.title}
            />
            <div className="events-items">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
