import React from "react";
import FooterSmall from "../../Components/Footers/Footer";
import IndexNavbar from "../../Components/Navbars/IndexNavbar";
const Notfound = () => {
  return (
    <>
      <IndexNavbar />
      <div className="flex flex-col items-center justify-center h-[82vh] text-center p-10">
        <h1 className="text-4xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <h1 className="text-2xl font-bold text-red-500">
          The page you are looking for does not exist or has been moved to
          another location on the server or the server is down or <br />
          <span className="text-green-500 cursor-pointer">
            ( we don't want you to see it :D )
          </span>
        </h1>
        <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md">
          <a href="/">Go Back</a>
        </button>
      </div>
      <FooterSmall />
    </>
  );
};

export default Notfound;
