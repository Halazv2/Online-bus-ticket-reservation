import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { Signup } from "../../api/auth/auth";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  age: yup.number().required().min(18).max(99),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export default function Register() {
  const [error, setError] = useState(null);
  const handleOnSubmit = (values) => {
    Signup(values, setError);
  };

  return (
    <div
      className="h-[100vh]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4359016/pexels-photo-4359016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 h-full flex justify-center items-center">
        <div className="flex w-full content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-white rounded-lg border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  {error && <p>{error}</p>}
                </div>
                <Formik
                  initialValues={{
                    fullName: "",
                    age: "",
                    email: "",
                    password: "",
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
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Full name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Full name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fullName}
                        />
                        <div className="text-red-500 text-xs italic">
                          {errors.fullName &&
                            touched.fullName &&
                            errors.fullName}
                        </div>{" "}
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Age
                        </label>
                        <input
                          type="number"
                          name="age"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Age"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.age}
                        />
                        <div className="text-red-500 text-xs italic">
                          {errors.age && touched.age && errors.age}
                        </div>{" "}
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <div className="text-red-500 text-xs italic">
                          {errors.email && touched.email && errors.email}
                        </div>
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        <div className="text-red-500 text-xs italic">
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700 active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="submit"
                          disabled={!isValid}
                        >
                          Create Account
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
                <div className="flex flex-wrap mt-6 relative">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-blueGray-200"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <Link to="/Login" className="text-blueGray-200">
                      <small>Create new account</small>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
