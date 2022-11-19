import { React } from "react";
import { useSelector } from "react-redux";
const Seats = ({ setSeats, seats }) => {
  const seatTotal = 36;
  const seatArray = [];
  const reservedSeats = useSelector((state) =>
    state.trip.trips[0].map((seat) => seat.reserved_seats)
  );
  for (let i = 1; i <= seatTotal; i++) {
    seatArray.push(i);
  }
  const handleSeatClick = (seat) => {
    if (reservedSeats[0].includes(seat)) {
      alert("Seat already reserved");
    } else {
      if (seat === seats) {
        setSeats(null);
      } else {
        setSeats(seat);
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-12 ">
      <h1 className="text-4xl font-bold">Select Your Seat</h1>
      <div className="flex flex-wrap items-center justify-center h-[70vh] overflow-auto border-2 border-gray-300 rounded-lg mt-5 p-8">
        <div className="grid grid-cols-4 gap-4  lg:gap-12">
          {seatArray.map((seat, i) => {
            return (
              <div
                key={i}
                onClick={() => handleSeatClick(seat)}
                className={`
                ${seats === seat ? "bg-gray-400 text-white" : ""} 
                ${
                  reservedSeats[0].includes(seat)
                    ? "bg-red-600 text-white cursor-not-allowed"
                    : "hover:border-gray-500 hover:bg-gray-100"
                }
                border-2 m-2 lg:m-0 border-gray-300 rounded-lg p-5  cursor-pointer duration-300
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
