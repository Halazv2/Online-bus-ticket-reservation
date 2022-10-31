import React, {
  useRef as UseRef,
  useEffect as UseEffect,
  useState,
  useEffect,
} from "react";
import Transition from "../../utils/Transition";
import * as yup from "yup";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Formik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  from: yup.string().required("From is required"),
  to: yup.string().required("To is required"),
  deperture_date: yup.date().required("Deperture date is required"),
  arrival_date: yup.date().required("Arrival date is required"),
  seats: yup.number().required("Seats is required"),
  price: yup.number().required("Price is required"),
});

function AddTripModal({ modalOpen, setModalOpen, getTrips }) {
  const tripID = useSelector((state) => state.trip.tripID);
  let selectedCities = [];
  let selectedDates = [];
  const [updatedTrip, setUpdatedTrip] = useState({
    from: "",
    to: "",
    deperture_date: "",
    arrival_date: "",
    seats: "",
    price: "",
    cities: [],
    dates: [],
  });
  const modalContent = UseRef(null);
  const animatedComponents = makeAnimated();

  // close on click outside
  // UseEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!modalOpen || modalContent.current.contains(target)) return;
  //     setModalOpen(false);
  //   };
  //   document.addEventListener("click", clickHandler);
  //   return () => document.removeEventListener("click", clickHandler);
  // });
  // close if the esc key is pressed
  UseEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const [citiesList, setCities] = useState([
    "oujda",
    "casablanca",
    "berkan",
    "ahfir",
    "wad-himer",
    "tlatawtalatin",
    "hafid",
    "asfi",
    "jdida",
    "souira",
  ]);
  const [times, setSelectedTimes] = useState([
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
  ]);

  const handleOnSubmit = (values) => {
    console.log(values);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/admin/createTrip`,
        {
          from: values.from,
          to: values.to,
          deperture_date: values.deperture_date,
          arrival_date: values.arrival_date,
          seats: values.seats,
          cities: selectedCities,
          date: selectedDates,
          price: values.price,
        },
        {
          headers: {
            "x-access-token": localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        getTrips();
        setModalOpen(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const getTripById = (id) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/trip/${id}`, {
        headers: {
          "x-access-token": localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setUpdatedTrip({
          from: res.data.from,
          to: res.data.to,
          deperture_date: res.data.deperture_date,
          arrival_date: res.data.arrival_date,
          seats: res.data.seats,
          price: res.data.price,
          cities: res.data.destanition.map((city) => city.cities),
          dates: res.data.destanition.map((city) => city.date),
        });
        console.log(updatedTrip);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    if (tripID !== null) {
      getTripById(tripID);
    }
  }, [tripID]);
  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
        >
          <div className="px-4  pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-start justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add Trip
              </h3>
              <button
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setModalOpen(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Search form */}
          <Formik
            initialValues={{
              from: "",
              to: "",
              deperture_date: "",
              arrival_date: "",
              seats: "",
              price: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              handleOnSubmit(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              isValid,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-4">
                  <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 ">
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700">
                        From
                      </label>
                      <input
                        type="text"
                        name="from"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={tripID === null ? values.from : tripID.from_city}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      <div className="text-red-500 text-xs italic">
                        {errors.from && touched.from && errors.from}
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700">
                        To
                      </label>
                      <input
                        type="text"
                        name="to"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.to}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      <div className="text-red-500 text-xs italic">
                        {errors.to && touched.to && errors.to}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 mt-4">
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700">
                        Deperture Date
                      </label>
                      <input
                        type="date"
                        name="deperture_date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.deperture_date}
                        min={new Date().toISOString().split("T")[0]}
                        max="2022-12-31"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      <div className="text-red-500 text-xs italic">
                        {errors.deperture_date &&
                          touched.deperture_date &&
                          errors.deperture_date}
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700">
                        Arrival Date
                      </label>
                      <input
                        type="date"
                        name="arrival_date"
                        min={new Date().toISOString().split("T")[0]}
                        max="2022-12-31"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.arrival_date}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      <div className="text-red-500 text-xs italic">
                        {errors.arrival_date &&
                          touched.arrival_date &&
                          errors.arrival_date}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 mt-4">
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700">
                        Seats Number
                      </label>
                      <input
                        type="number"
                        name="seats"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.seats}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      <div className="text-red-500 text-xs italic">
                        {errors.seats && touched.seats && errors.seats}
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      <div className="text-red-500 text-xs italic">
                        {errors.price && touched.price && errors.price}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 mt-4">
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700">
                        Cities
                      </label>

                      <Select
                        isMulti
                        name="cities"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={citiesList.map((city) => ({
                          value: city,
                          label: city,
                        }))}
                        className=" basic-multi-select border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          selectedCities = e.map((city) => city.value);
                        }}
                        classNamePrefix="select"
                      />
                      <div className="text-red-500 text-xs italic">
                        {errors.cities && touched.cities && errors.cities}
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-sm font-medium text-gray-700">
                        Time of departure
                      </label>
                      <Select
                        isMulti
                        name="date"
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={times.map((time) => ({
                          value: time,
                          label: time,
                        }))}
                        className=" basic-multi-select border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          selectedDates = e.map((time) => time.value);
                        }}
                        classNamePrefix="select"
                      />
                      <div className="text-red-500 text-xs italic">
                        {errors.date && touched.date && errors.date}
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 p-2 flex justify-center rounded relative"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Transition>
    </>
  );
}

export default AddTripModal;
