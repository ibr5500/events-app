import Image from "next/image";

const SingleEvent = ({ data }) => {
  return (
    <div className="event-continer">
      <Image
        src={data.image}
        width={1000}
        height={500}
        alt={data.title}
      />
      <div className="single-event">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default SingleEvent;
