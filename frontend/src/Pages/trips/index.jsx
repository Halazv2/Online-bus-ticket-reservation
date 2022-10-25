import TripsResult from "../../Components/trips/tripsResult";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTrips } from "../../redux/trip.js";

const Trips = ({ trip }) => {
  const trips = useSelector((state) => state.trip.trips);
  const dispatch = useDispatch();
  useEffect(() => {
    const newtrip = [
      {
        _id: "2",
        from: "Cairo",
        to: "Alexandria",
        date: "2021-05-01",
        guest: "1",
      },
    ];
    dispatch(setTrips(newtrip));
  }, [trip]);

  return (
    <section
      style={{
        backgroundImage:
          "url(https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      {/* {tripsResult.length > 0 ? (
        tripsResult.map((tripsResult) => {
          return (
            <>
              <TripsResult key={tripsResult._id} tripsResult={tripsResult} />
            </>
          );
        })
      ) : (
        <div className="flex items-center justify-center text-red-500 text-2xl font-bold">
          <h1>No Trips Found</h1>
        </div>
      )} */}
      {/* {trips.map((trip) => {
        return (
          <>
            <h1>{trip._id}</h1>
          </>
        );
      })} */}
    </section>
  );
};

export default Trips;
