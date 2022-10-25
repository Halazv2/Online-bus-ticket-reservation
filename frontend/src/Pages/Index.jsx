import React from "react";
import FooterSmall from "../Components/Footers/Footer.jsx";
import Hero from "../Components/home/Hero";
import IndexNavbar from "../Components/Navbars/IndexNavbar";

export default function Index({ trip, setTrip, isLogged, setIsLogged }) {
  return (
    <>
      <IndexNavbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <Hero trip={trip} setTrip={setTrip} />
      <FooterSmall />
    </>
  );
}
