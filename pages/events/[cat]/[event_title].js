import Image from "next/image";

const EventPage = ({ data }) => {
  return (
    <div>
      <Image
        src={data.image}
        width={1000}
        height={500}
        alt={data.title}
      />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        event_title: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.event_title;

  const { allEvents } = await import("/data/data.json");

  const eventData = allEvents.find((ev) => ev.id === id);

  return {
    props: {
      data: eventData,
    },
  };
}
