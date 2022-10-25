const   TripsResult = ({ tripsResult }) => {
  return (
    <div class="flex justify-center items-center w-full h-full">
      <div
        id="trips"
        class="break-inside relative overflow-hidden w-fit flex flex-col justify-between space-y-2 text-sm rounded-xl  p-4 mb-4 bg-[#5E17F4] text-white"
      >
        <span class="uppercase text-xs text-[#D2BDFF]">Mekna'7 trip</span>
        <div class="flex flex-row items-center space-x-3 ">
          <img src="https://img.icons8.com/ios/50/000000/bus.png" alt="bus" />
          <span class="text-base font-medium flex justify-around ">
            <h1>
              <span class="text-[#D2BDFF]">From:</span> &nbsp;
              {tripsResult.depart}
              11:00 AM
            </h1>
            &nbsp; &nbsp; &nbsp;
            <h1>
              <span class="text-[#D2BDFF]">To:</span> &nbsp;
              {tripsResult.arrive}
              12:00 PM
            </h1>
          </span>
        </div>
        <div class="flex justify-between items-center">
          <span>20/10/2023</span>
          <button class="flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black">
            <span>Book Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
