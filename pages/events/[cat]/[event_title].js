import SingleEvent from "@/src/components/events/SingleEvent";

const EventPage = ({ data }) => {
  return <SingleEvent data={data} />;
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
