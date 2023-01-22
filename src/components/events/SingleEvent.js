import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      const res = await fetch("/api/event-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      const data = await res.json();
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  return (
    <div className="event-continer">
      <div className="single-event">
        <h1>{data.title}</h1>
        <Image
          src={data.image}
          width={1000}
          height={500}
          alt={data.title}
        />
        <p>{data.description}</p>
        <form
          onSubmit={onSubmit}
          className="form-email"
        >
          <p
            className={
              message.includes("successfully")
                ? "success"
                : message.includes("already!!")
                ? "alert"
                : ""
            }
          >
            {message}
          </p>
          <label>Regester for this event!</label>
          <div>
            <input
              ref={inputEmail}
              type="email"
              placeholder="jhon@gmail.com"
              name="email"
              id="email"
            />
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleEvent;
