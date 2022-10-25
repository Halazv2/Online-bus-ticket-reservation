import * as yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  from: yup.string().required(),
  to: yup.string().required(),
  guest: yup.number().required(),
  date: yup.date().required(),
});

const Search = ({ trip, setTrip }) => {
  const navigate = useNavigate();
  const handleOnSubmit = (values) => {
    // console.log(values);
    setTrip(values);
    setTimeout(() => {
      navigate("/trips");
    }, 1000);
  };
  return (
    <div className=" flex items-center justify-center bg-white lg:mt-16  flex-col sm:flex-row shadow-lg rounded-lg">
      <div className="sm:flex items-center flex-col">
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full ">
            <Formik
              initialValues={{
                from: "",
                to: "",
                // guest: "",
                // date: "",
              }}
              validationSchema={schema}
              onSubmit={handleOnSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          From
                        </label>
                        <input
                          type="text"
                          name="from"
                          id="from"
                          placeholder="Oujda"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.from}
                        />
                        <div className="text-red-500 text-xs italic">
                          {errors.from && touched.from && errors.from}
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          to
                        </label>
                        <input
                          type="text"
                          name="to"
                          id="to"
                          placeholder="Casablanca"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.to}
                        />
                        <div className="text-red-500 text-xs italic">
                          {errors.to && touched.to && errors.to}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Passengers
                        </label>
                        <input
                          type="number"
                          name="guest"
                          id="guest"
                          placeholder="5"
                          min="0"
                          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.guest}
                        />
                        <div className="text-red-500 text-xs italic">
                          {errors.guest && touched.guest && errors.guest}
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Date of departure
                        </label>
                        <input
                          type="date"
                          /* Setting the minimum date to today's date. */
                          min={new Date().toISOString().split("T")[0]}
                          max="2022-12-31"
                          name="date"
                          id="date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.date}
                        />
                        <div className="text-red-500 text-xs italic">
                          {errors.date && touched.date && errors.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 p-2 flex justify-center rounded relative"
                    type="submit"
                    disabled={!isValid}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
