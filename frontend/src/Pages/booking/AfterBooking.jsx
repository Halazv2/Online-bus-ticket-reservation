import React from "react";
import { useParams } from "react-router-dom";
import "../../assets/styles/ticket.css";
import "primeicons/primeicons.css";
import useFetchTicket from "./useFetchTicket";
import IndexNavbar from "../../Components/Navbars/IndexNavbar";
import FooterSmall from "../../Components/Footers/Footer";

const AfterBooking = () => {
  const params = useParams();
  const { ticket, isLoading } = useFetchTicket(params.id);
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen ">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32">
            <div className="flex justify-center items-center w-full h-full">
              <h1 className="text-xl font-bold text-gray-500">Loading..</h1>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <IndexNavbar />

          <div
            className=""
            style={{
              backgroundImage: `url(https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="container 
              lg:h-[80vh] h-screen 
            "
            >
              <div className="ticket airline">
                <div className="top">
                  <h1>boarding pass</h1>
                  <div className="big">
                    <p className="from">Mek</p>
                    <p className="to ml-12">
                      <i className="fas fa-arrow-right"></i> Na'7
                    </p>
                  </div>
                  <div className="top--side">
                    <i className="fas fa-plane"></i>
                    <p className="first-letter:uppercase">
                      {ticket ? ticket.tripInfo.from : ""}
                    </p>
                    <p className="first-letter:uppercase">
                      {ticket ? ticket.tripInfo.to : ""}
                    </p>
                  </div>
                </div>
                <div className="bottom">
                  <div className="column">
                    <div className="row row-1">
                      <p className="first-letter:uppercase">
                        <span>From</span>
                        {ticket ? ticket.tripInfo.from : ""}
                      </p>
                      <p className="row--right first-letter:uppercase">
                        <span>To</span>
                        {ticket ? ticket.tripInfo.to : "null"}
                      </p>
                    </div>
                    <div className="row row-2">
                      <p className="row--center">
                        <span>Departs</span>11:00 AM
                      </p>
                      <p className="row--right">
                        <span>Arrives</span>1:05 PM
                      </p>
                    </div>
                    <div className="row row-3">
                      <p>
                        <span>Passenger</span>
                        {ticket?.user_info?.name}
                      </p>
                      <p className="row--center">
                        <span>Seat</span> {ticket?.seat_number}A
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p className="row--center">
                        <span>Price</span> {ticket.price ? ticket.price : ""} DH
                      </p>
                    </div>
                  </div>
                  <div className="bar--code"></div>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall />
        </div>
      )}
    </div>
  );
};

export default AfterBooking;
