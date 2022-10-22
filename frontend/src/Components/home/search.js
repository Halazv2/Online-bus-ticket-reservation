const Search = () => {
  return (
    <div className=" flex items-center justify-center bg-white lg:mt-16  flex-col sm:flex-row shadow-lg rounded-lg">
      <div className="sm:flex items-center flex-col">
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full ">
            <form>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      From
                    </label>
                    <input
                      type="text"
                      name="from"
                      id="from"
                      placeholder="from"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      to
                    </label>
                    <input
                      type="text"
                      name="to"
                      id="to"
                      placeholder="to"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Passengers
                    </label>
                    <input
                      type="number"
                      name="guest"
                      id="guest"
                      placeholder="5"
                      min="0"
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date of departure
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>{" "}
              <button className="w-full text-white bg-indigo-600 hover:bg-indigo-700 p-2 flex justify-center  rounded relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
