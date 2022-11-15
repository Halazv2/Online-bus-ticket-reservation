import { React, useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import Seats from "./seats";
import IndexNavbar from "../../Components/Navbars/IndexNavbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  age: yup.number().required(),
  phone: yup.number().required(),
  seat: yup.number().required(),
});

const Booking = () => {
  const [seats, setSeats] = useState(null);
  const SelectIsAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const SelectTrip = useSelector((state) => state.trip.bookedTrip[0]);
  const selectedTripID = useSelector((state) => state.trip.selectedTripID[0]);
  const navigate = useNavigate();
  const [selectSeactError, setSelectSeactError] = useState(false);
  const handleOnSubmit = async (values) => {
    const from = SelectTrip[0].destanition
      .map((item) => item.cities[0])
      .toString();
    const to = SelectTrip[0].destanition
      .map((item) => item.cities[1])
      .toString();
    // console.log(values + seats);
    if (seats === null) {
      setSelectSeactError(true);
    } else {
      // return;
      axios
        .post(`${process.env.REACT_APP_API_URL}/tickets`, {
          trip_id: selectedTripID,
          user_id: localStorage.getItem("userID")
            ? localStorage.getItem("userID")
            : null,

          name: !SelectIsAuthenticated ? null : values.name,
          email: !SelectIsAuthenticated ? null : values.email,
          seat_number: seats,
          phoneNmber: values.phone,
          from: from,
          to: to,
          price: SelectTrip[0].price,
        })
        .then((res) => {
          console.log(res.data);
          navigate(`/Ticket/${res.data.id}`);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div
      className=""
      style={{
        backgroundImage:
          "url(https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <IndexNavbar />
      <div className="flex lg:flex-row flex-col justify-center items-center h-fit">
        <div className=" flex items-center justify-center h-fit lg:w-[50%] w-[90%]  bg-white lg:m-10 m-2 flex-col sm:flex-row shadow-lg rounded-lg">
          <div className="sm:flex items-center flex-col">
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full ">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    age: "",
                    phone: "",
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
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              className="w-full px-3 py-3 text-base text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline"
                              placeholder="Name"
                            />
                            {errors.name && touched.name && (
                              <p className="text-red-500">{errors.name}</p>
                            )}
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className="w-full px-3 py-3 text-base text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline"
                              placeholder="Email"
                            />
                            {errors.email && touched.email && (
                              <p className="text-red-500">{errors.email}</p>
                            )}
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              Age
                            </label>
                            <input
                              type="number"
                              min={18}
                              name="age"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.age}
                              className="w-full px-3 py-3 text-base text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline"
                              placeholder="Age"
                            />
                            {errors.age && touched.age && (
                              <p className="text-red-500">{errors.age}</p>
                            )}
                          </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">
                              Phone
                            </label>
                            <input
                              type="number"
                              name="phone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                              className="w-full px-3 py-3 text-base text-gray-700 placeholder-gray-500 border rounded-lg focus:shadow-outline"
                              placeholder="Phone"
                            />
                            {errors.phone && touched.phone && (
                              <p className="text-red-500">{errors.phone}</p>
                            )}
                          </div>
                        </div>
                        <div className="w-full px-3">
                          <button
                            type="submit"
                            // disabled={!isValid}
                            onClick={() => handleOnSubmit(values)}
                            className="w-full px-3 py-4 cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 p-2 flex justify-center rounded relative"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <>
          {selectSeactError ? (
            <p className="text-red-500">Please select seat</p>
          ) : null}
          <Seats seats={seats} setSeats={setSeats} />
        </>
      </div>
    </div>
  );
};

export default Booking;
