import { React } from "react";

const Seats = ({ setSeats, seats }) => {
  const seatTotal = 36;
  const seatArray = [];
  for (let i = 1; i <= seatTotal; i++) {
    seatArray.push(i);
  }
  const handleSeatClick = (seat) => {
    console.log(seats, "clicked at", seat);
    if (seat === seats) {
      setSeats(null);
      console.log(seats, "clicked");
    } else {
      setSeats(seat);
      console.log(seats + "not null");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-12 ">
      <h1 className="text-4xl font-bold">Select Your Seat</h1>
      <div className="flex flex-wrap items-center justify-center h-[70vh] overflow-auto border-2 border-gray-300 rounded-lg mt-5 p-8">
        <div
          // className="flex flex-wrap items-center justify-center mt-5 lg:gap-24  lg:w-1/2"
          // using grid 2 columns 4 rows
          className="grid grid-cols-4 gap-4  lg:gap-12"
        >
          {seatArray.map((seat, i) => {
            return (
              <div
                key={i}
                onClick={() => handleSeatClick(seat)}
                className={`${seats === seat ? "bg-gray-400 text-white" : ""}
                border-2 m-2 lg:m-0 border-gray-300 rounded-lg p-5 hover:bg-gray-100 hover:border-gray-500 cursor-pointer duration-300
                flex flex-col items-center justify-center w-14 h-14`}
              >
                {seat}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Seats;
