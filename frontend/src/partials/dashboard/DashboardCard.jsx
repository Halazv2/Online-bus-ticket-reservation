import React, { useEffect } from "react";
import axios from "axios";
import "primeicons/primeicons.css";
import { useDispatch } from "react-redux";
import { setTripID } from "../../redux/trip.js";
import UpdateTripModal from "../actions/updateTripModal.jsx";

function DashboardCard({
  trips,
  getTrips,
  updateModalOpen,
  setUpdateModalOpen,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    getTrips();
  }, []);

  const deleteTrip = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/deleteTrip/${id}`, {
        headers: {
          "x-access-token": `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        getTrips();
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">Lines</h2>
        </header>
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Depart</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Arrive</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">
                      Break Points
                    </div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">
                      Date de départ
                    </div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Duration</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Places left</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Price</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              {trips.map((trip) => {
                return (
                  <tbody className="text-sm font-medium divide-y divide-slate-100">
                    <tr>
                      <td className="p-2">
                        <div className="flex items-center">
                          <div className="text-slate-800 font-semibold">
                            {trip.destanition.map((dest) => {
                              return dest.cities[0];
                            })}
                          </div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center font-semibold">
                          {trip.destanition.map((dest) => {
                            return dest.cities[dest.cities.length - 1];
                          })}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center font-semibold">
                          {
                            // return indexes of break points
                            trip.destanition.map((dest) => {
                              return dest.cities.slice(
                                1,
                                dest.cities.length - 1
                              );
                            })
                          }
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">
                          {trip.destanition.map((dest) => {
                            return (
                              dest.date[0] +
                              " - " +
                              dest.date[dest.date.length - 1]
                            );
                          })}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-sky-500">
                          {trip.deperture_date.slice(0, 10)}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-sky-500">
                          {trip.seats - trip.reserved_seats.length}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-green-500">
                          {trip.price} MAD
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center flex justify-center items-center">
                          <button
                            onClick={() => {
                              dispatch(setTripID(trip._id));
                              setUpdateModalOpen(true);
                            }}
                            className=" text-blue-500 hover:text-blue:700 font-bold py-2 px-4 rounded"
                          >
                            <i className="pi pi-pencil"></i>
                          </button>
                          <div className="text-center flex justify-center items-center">
                            <button
                              className=" text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded"
                              onClick={() => deleteTrip(trip._id)}
                            >
                              <i className="pi pi-trash"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
      <UpdateTripModal
        setUpdateModalOpen={setUpdateModalOpen}
        updateModalOpen={updateModalOpen}
        getTrips={getTrips}
      />
    </>
  );
}

export default DashboardCard;
