import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import AddTrip from "../../partials/actions/AddTrip";
import DashboardCard from "../../partials/dashboard/DashboardCard";
import axios from "axios";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [trips, setTrips] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const getTrips = async () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/trips`, {
        headers: {
          "x-access-token": `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setTrips(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2 mb-4">
              {/* Filter button */}
              <AddTrip
                getTrips={getTrips}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            </div>
            <DashboardCard
              trips={trips}
              getTrips={getTrips}
              updateModalOpen={updateModalOpen}
              setUpdateModalOpen={setUpdateModalOpen}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
