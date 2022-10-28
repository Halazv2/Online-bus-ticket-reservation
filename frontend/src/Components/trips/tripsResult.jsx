const TripsResult = ({ trip }) => {
  let hafid;
  const from = () => {
    trip.map((trip) => {
      console.log(trip.destanition || "no from");
      return (hafid = trip.destanition);
    });
  };
  from();
  return (
    <div className="flex justify-center items-center">
      <div
        id="trips"
        className="break-inside relative overflow-hidden w-fit flex flex-col justify-between space-y-2 text-sm rounded-xl  p-4 mb-4 bg-[#5E17F4] text-white"
      >
        <span className="uppercase text-xs text-[#D2BDFF]">
          Mekna'7 trip &nbsp; &nbsp; &nbsp;
          {trip.map((trip_type) => {
            return trip_type.trip_type;
          })}
        </span>
        <div className="flex flex-row items-center space-x-3 ">
          <img src="https://img.icons8.com/ios/50/000000/bus.png" alt="bus" />
          <span className="text-base font-medium flex justify-around ">
            <h1>
              <span className="text-[#D2BDFF]">From:</span> &nbsp;
              {hafid.map((from) => {
                return from.cities[0];
              })}
            </h1>
            &nbsp; &nbsp; &nbsp;
            <h1>
              <span className="text-[#D2BDFF]">To:</span> &nbsp;
              {hafid.map((from) => {
                return from.cities[1];
              })}
            </h1>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>20/10/2023</span>
          <button
            
          className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black">
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
