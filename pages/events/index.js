import EventsList from "@/src/components/events/EventsList";

const Events = ({ data }) => {
  return <EventsList data={data} />;
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
