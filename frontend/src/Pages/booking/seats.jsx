import { React } from "react";

const Seats = ({ setSeats }) => {
  const seatTotal = 10;
  const seatArray = [];
  for (let i = 1; i <= seatTotal; i++) {
    seatArray.push(i);
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold">Select Your Seat</h1>
      <div className="flex flex-wrap items-center justify-center mt-5 lg:gap-24  lg:w-1/2">
        {seatArray.map((seat, i) => {
          return (
            <div
              key={i}
              onClick={() => setSeats(seat)}
              className="flex items-center justify-center border-2 m-2 lg:m-0 border-gray-300 rounded-lg p-5 hover:bg-gray-100 hover:border-gray-500 cursor-pointer duration-300"
            >
              {seat}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seats;
