import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBannerUser from "../../partials/dashboard/WelcomeBannerUser";
import AddTrip from "../../partials/actions/AddTrip";
import DashboardCardUser from "../../partials/dashboard/DashboardCardUser";
import axios from "axios";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const getUsers = async () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/getAllUsers`, {
        headers: {
          "x-access-token": `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
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
            <WelcomeBannerUser />
            <DashboardCardUser
              users={users}
              getUsers={getUsers}
              setModalOpen={setModalOpen}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
