import TripsResult from "../../Components/trips/tripsResult";
import { useSelector } from "react-redux";
import IndexNavbar from "../../Components/Navbars/IndexNavbar";
import FooterSmall from "../../Components/Footers/Footer";

const Trips = () => {
  const select = useSelector((state) => state.trip.trips);
  return (
    <>
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
        <IndexNavbar />
        <div className="flex flex-col items-center justify-start h-[82vh]">
          <div className="flex flex-wrap items-center justify-center h-full mt-5 lg:gap-24  md:gap-6 ">
            {select.length > 0 ? (
              select.map((trip) => {
                return (
                  <>
                    <TripsResult trip={trip} />
                  </>
                );
              })
            ) : (
              <h1 className="text-4xl font-bold text-red-500">No Trips</h1>
            )}
          </div>
        </div>
        <FooterSmall className="-mt-6" />
      </section>
    </>
  );
};

export default Trips;
