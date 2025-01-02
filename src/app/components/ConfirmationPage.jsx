"use client";

import { useSearchParams } from "next/navigation";

const ConfirmationPage = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const guests = searchParams.get("guests");
  const name = searchParams.get("name");
  const contact = searchParams.get("contact");

  return (
    <div className="confirmation-page">
      <h1>Booking Confirmation</h1>
      <div>
      <h1>Booking Confirmation</h1>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Guests: {guests}</p>
      <p>Name: {name}</p>
      <p>Contact: {contact}</p>
    </div>
      <button
        onClick={() => window.location.replace("/")}
        className="return-button"
      >
        Return to Home
      </button>
    </div>
  );
};

export default ConfirmationPage;
