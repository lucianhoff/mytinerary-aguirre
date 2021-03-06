import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Field } from "formik";
import * as yup from "yup";
import GoogleLogin from "react-google-login";

import { Link } from "react-router-dom";

const SignUp = ({ submit, responseGoogle }) => {
  const [countries, setCountries] = useState(["Choose your country"]);

  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));
  }, []);

  const SignUpSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("First Name is required")
      .matches(/^[a-zA-Z]+$/, "This field is must be alphabetic")
      .min(3, "Too short, minimum 3 characters"),
    lastName: yup
      .string()
      .required("Last Name is required")
      .matches(/^[a-zA-Z]+$/, "This field is must be alphabetic")
      .min(3, "The Last Name is short"),
    email: yup
      .string()
      .email("Invalid email")
      .matches(/(\W|^)[\w.-]/, "Incorrect email")
      .required("The email is required"),
    password: yup
      .string()

      .min(8, "Too short, minimum 8 characters")
      .required("The Password is required"),
    photoURL: yup
      .string()
      .url("Invalid URL")
      .required("The profile picture is required"),
  });

  return (
    <>
      <div
        className="flex mt-32 mx-5 mb-8 bg-purple-600"
        style={{ backgroundImage: "url(https://by3301files.storage.live.com/y4mXdiAGEBWDcB0VpOjyuPl1OG--G3peoTdXmtLj6g4zJO872_i8V7JMu4I1JHaOD0UV7uP8vv74FGO_bqoTNVMOvZkLc7oPSnwojyrm6sguLP9Kxoi10WHwu1dT0C55_iVwWUlNXzipS0AF14Qb6X_zeVrxRdF3G--m0lUzWW29a9tC8RPQKx4Sgiy4zBb2KhG?width=1056&height=679&cropmode=none)" }}
      >
        <div className="flex items-center justify-center h-100 w-100  md:w-100 sm:w-100">
          <div className="flex-col flex ml-auto mr-auto items-center w-full">
            <h1 className="font-bold rubik text-4xl text-center my-16 text-white mb-16">
              {" "}
              Welcome to MyTinerary!{" "}
            </h1>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                photoURL: "",
                country: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values, { resetForm }) => {
                submit(values);
                resetForm({ values: "" });
              }}
            >
              {({ handleSubmit, handleChange, values, errors, touched }) => (
                <>
                  <form
                    className="mt-2 flex flex-col w-10/12 md:w-6/12"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-col md:w-6/12 mr-0 md:mr-5">
                        {/* firstname */}
                        <div className="flex items-stretch w-full relative h-15 bg-white rounded">
                          <div className="flex -mr-px justify-center w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="#7c3aed"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </span>
                          </div>
                          <Field
                            type="text"
                            className="flex-shrink flex-grow text-purple-600 rubik leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                            placeholder="First Name"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange("firstName")}
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {errors.firstName && touched.firstName ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#7c3aed"
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
                              ) : touched.firstName ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#7c3aed"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : null}
                            </span>
                          </div>
                        </div>
                        <div className="text-white rubik text-sm w-11/12 pt-1 mb-3">
                          {errors.firstName && touched.firstName ? (
                            <p>{errors.firstName}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col md:w-6/12 ">
                        {/* lastname */}
                        <div className=" flex items-stretch w-full relative h-15 bg-white rounded">
                          <div className="flex -mr-px justify-center w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="#7c3aed"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </span>
                          </div>
                          <Field
                            type="text"
                            className="flex-shrink flex-grow text-purple-600 rubik leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                            placeholder="Last Name"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange("lastName")}
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {errors.lastName && touched.lastName ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#7c3aed"
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
                              ) : touched.lastName ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#7c3aed"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : null}
                            </span>
                          </div>
                        </div>
                        <div className="text-white rubik text-sm w-11/12 pt-1 mb-3">
                          {errors.lastName && touched.lastName ? (
                            <p className="ml-0 md:ml-5">{errors.lastName}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-col md:w-6/12 mr-0 md:mr-5">
                        {/* email */}
                        <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white rounded ">
                          <div className="flex -mr-px justify-center w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="#7c3aed"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <Field
                            className="flex-shrink flex-grow text-purple-600 rubik leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange("email")}
                            placeholder="e-mail"
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {errors.email && touched.email ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#7c3aed"
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
                              ) : touched.email ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#7c3aed"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : null}
                            </span>
                          </div>
                        </div>
                        <div className="text-white rubik text-sm w-11/12 pt-1 mb-3">
                          {errors.email && touched.email ? (
                            <p>{errors.email}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>

                      {/* password */}
                      <div className="flex flex-col md:w-6/12">
                        <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white rounded">
                          <div className="flex -mr-px justify-center w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="#7c3aed"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <Field
                            className="flex-shrink flex-grow text-purple-600 rubik leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-base outline-none"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            onChange={handleChange("password")}
                            value={values.password}
                            placeholder="Password"
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {!showPassword ? (
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="#7c3aed"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => handlePassword()}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                  ></path>
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="#7c3aed"
                                  onClick={() => handlePassword()}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="text-white rubik text-sm w-11/12 pt-1 mb-3">
                          {errors.password && touched.password ? (
                            <p className="ml-0 md:ml-5">{errors.password}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                      {/* photoURL */}
                      <div className="flex flex-col w-full ">
                        <div className="flex flex-wrap items-stretch  relative h-15 bg-white rounded">
                          <div className="flex -mr-px justify-center md:w-15 p-2">
                            <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl whitespace-no-wrap text-gray-600">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="#7c3aed"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </span>
                          </div>
                          <Field
                            type="url"
                            className="flex-shrink flex-grow ml-5 text-purple-600 rubik leading-normal border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative text-base outline-none"
                            name="photoURL"
                            placeholder="Photo URL"
                            value={values.photoURL}
                            onChange={handleChange("photoURL")}
                          />
                          <div className="flex -mr-px">
                            <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                              {errors.photoURL && touched.photoURL ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#7c3aed"
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
                              ) : touched.photoURL ? (
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="#7c3aed"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              ) : null}
                            </span>
                          </div>
                        </div>
                        <div className="text-white rubik text-sm w-11/12 pt-1 mb-3">
                          {errors.photoURL && touched.photoURL ? (
                            <p>{errors.photoURL}</p>
                          ) : (
                            <p className="invisible">solo aprovecho el bug</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <span className="bg-white w-9 flex justify-center items-center h-10 rounded-l-md">
                        <svg
                          className="w-6 h-6 ml-2"
                          fill="none"
                          stroke="#7c3aed"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <select
                        className="w-full mb-3 text-purple-600 rubik h-10  px-3 outline-none scrollbarcomments rounded-r-md select"
                        onChange={handleChange("country")}
                        placeholder="Choose your country"
                        name="country"
                        value={values.country}
                      >
                        <option defaultValue="Choose your country">
                          Choose your country
                        </option>

                        {countries.map((country, index) => (
                          <option key={index} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex justify-center items-baseline lg:items-center">
                      <div className="w-full md:w-6/12 flex justify-center items-center flex-col">
                        <button
                          type="submit"
                          className="w-full px-4 py-2 font-bold transition text-purple-800 bg-purple-300 rounded-full hover:bg-purple-800  hover:text-white focus:outline-none focus:shadow-outline"
                        >
                          {" "}
                          Sign Up!{" "}
                        </button>
                        <GoogleLogin
                          clientId="36260654393-ufbarlsfqu9j3e49cohjad06ltg635f2.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <button
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                              className="w-full px-4 py-2 font-bold transition text-purple-800 bg-purple-300 rounded-full hover:bg-purple-800  hover:text-white focus:outline-none focus:shadow-outline mt-2 mb-5"
                            >
                              Sign Up with Google!
                            </button>
                          )}
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </div>
                    </div>

                    <Link
                      to="/signin"
                      className="text-3xl fw-bold text-white font-roboto text-center leading-normal hover:text-purple-900 mb-7"
                    >
                      You have an account yet? Sign in!
                    </Link>
                  </form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
