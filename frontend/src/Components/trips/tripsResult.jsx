import { useDispatch } from "react-redux";
import { setSelectedTripID } from "../../redux/trip.js";
import { setBookedTrip } from "../../redux/trip.js";
import { useNavigate } from "react-router-dom";

const TripsResult = ({ trip }) => {
  let hafid;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const from = () => {
    trip.map((trip) => {
      return (hafid = trip.destanition);
    });
  };
  from();

  const handleOnClick = () => {
    dispatch(setSelectedTripID(trip.map((trip) => trip.id)));
    dispatch(setBookedTrip(trip));
    navigate(`/Booking`);
  };
  return (
    <div className="flex justify-center items-center">
      <div
        id="trips"
        className="break-inside relative overflow-hidden w-fit flex flex-col justify-between space-y-2 text-sm rounded-xl  p-4 mb-4 bg-[#5E17F4] text-white"
      >
        <span className="uppercase text-xs text-[#D2BDFF] flex justify-between">
          <p>Mekna'7 trip </p>
          <p>
            {trip.map((trip_type) => {
              return trip_type.trip_type;
            })}
          </p>
        </span>
        <div className="flex flex-row items-center space-x-3 gap-5 ">
          <svg
            width="80"
            height="80"
            viewBox="0 0 260 267"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="16.5"
              y="2.5"
              width="227"
              height="238"
              rx="29.5"
              stroke="white"
              strokeWidth="5"
            />
            <rect
              x="2.5"
              y="65.5"
              width="9"
              height="54"
              rx="3.5"
              stroke="white"
              strokeWidth="5"
            />
            <rect
              x="248.5"
              y="65.5"
              width="9"
              height="54"
              rx="3.5"
              stroke="white"
              strokeWidth="5"
            />
            <rect
              x="74.5"
              y="18.5"
              width="118"
              height="18"
              rx="5.5"
              stroke="white"
              strokeWidth="5"
            />
            <circle
              cx="205"
              cy="200"
              r="17.5"
              stroke="white"
              strokeWidth="5"
            />
            <circle cx="57" cy="200" r="17.5" stroke="white" strokeWidth="5" />
            <rect
              x="40.5"
              y="58.5"
              width="180"
              height="93"
              rx="9.5"
              stroke="white"
              strokeWidth="5"
            />
            <path
              d="M24 256.038V235.098C24 233.529 25.7236 232.571 27.0559 233.4L42.0151 242.699C42.332 242.896 42.6978 243 43.071 243H65C66.1046 243 67 243.895 67 245V256.058C67 256.919 66.4491 257.684 65.6325 257.956L46.618 264.294C46.2164 264.428 45.7826 264.431 45.3792 264.302L25.3936 257.943C24.5636 257.679 24 256.909 24 256.038Z"
              stroke="white"
              strokeWidth="5"
            />
            <path
              d="M237 255.538V234.598C237 233.029 235.276 232.071 233.944 232.9L218.985 242.199C218.668 242.396 218.302 242.5 217.929 242.5H196C194.895 242.5 194 243.395 194 244.5V255.558C194 256.419 194.551 257.184 195.368 257.456L214.382 263.794C214.784 263.928 215.217 263.931 215.621 263.802L235.606 257.443C236.436 257.179 237 256.409 237 255.538Z"
              stroke="white"
              strokeWidth="5"
            />
          </svg>

          <div className="flex flex-col space-y-1 ">
            <span className="text-base font-medium flex justify-between flex-col gap-2 first-letter:uppercase">
              <div className="flex justify-between items-center">
                <h1>
                  <span className="text-[#D2BDFF]">From:</span> &nbsp;
                  {hafid.map((from) => {
                    return from.cities[0];
                  })}
                </h1>
                <h1>
                  <span className="text-[#D2BDFF]">To:</span> &nbsp;
                  {hafid.map((from) => {
                    return from.cities[1];
                  })}
                </h1>
              </div>
              <div className="flex justify-between items-center">
                <h1>
                  <span className="text-[#D2BDFF]">Date:</span> &nbsp;
                  {trip.map((trip) => {
                    return trip.deperture_date.slice(0, 10);
                  })}
                  &nbsp; &nbsp; &nbsp;&nbsp;
                  <span className="text-[#D2BDFF]">At:</span> &nbsp;
                  {trip.map((trip) => {
                    return trip.timeofdepart[0];
                  })}
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <h1>
                  <span className="text-[#D2BDFF]">Seats left:</span> &nbsp;
                  {trip.map((trip) => {
                    return trip.seats;
                  })}
                </h1>
              </div>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-base font-medium flex justify-around ">
              <span className="text-[#D2BDFF]">price : </span> &nbsp;
              {trip.map((trip) => {
                return trip.price;
              })}
              &nbsp; DH&nbsp;
            </span>
          </div>
          <button
            onClick={() => {
              handleOnClick();
            }}
            className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black"
          >
            <span>Book Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripsResult;
