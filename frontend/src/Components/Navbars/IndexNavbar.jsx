import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogged(true);
      console.log("logged");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userEmail");
    setIsLogged(false);
  };

  return (
    <nav className="w-full  shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/" className="text-2xl font-bold ">
              <h2 className="text-2xl font-bold hover:text-indigo-700 text-indigo-600 ">
                Mekna'7
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className=" hover:text-indigo-200">
                <Link to="/">Home</Link>{" "}
              </li>
              <li className=" hover:text-indigo-200">
                <Link to="/about">About</Link>{" "}
              </li>
              <li className=" hover:text-indigo-200">
                <Link to="/contact">Contact US</Link>{" "}
              </li>
            </ul>
            {!isLogged ? (
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <Link
                  to="/login"
                  className="inline-block w-full px-4 py-2 text-center  text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700"
                >
                  Sign in
                </Link>
                <Link
                  to="/register"
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <Link
                  to="/"
                  className="inline-block w-full px-4 py-2 text-center  text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
        {isLogged ? (
          <div className="hidden space-x-2 md:inline-block">
            <Link
              to="/"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="hidden space-x-2 md:inline-block">
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700"
            >
              Sign in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
