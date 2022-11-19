import React, { useEffect, useState } from "react";
import FooterSmall from "../../Components/Footers/Footer";
import IndexNavbar from "../../Components/Navbars/IndexNavbar";

const Unauthorized = () => {
  return (
    <>
      <IndexNavbar />
      <div className="flex flex-col items-center justify-center h-[82vh] text-center p-10">
        <h1 className="text-4xl font-bold text-red-500">Unauthorized</h1>
        <h1 className="text-2xl font-bold text-red-500">
          You are not allowed to access this page
        </h1>
        <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md">
          <a href="/">Go Back</a>
        </button>
      </div>
      <FooterSmall />
    </>
  );
};

export default Unauthorized;
