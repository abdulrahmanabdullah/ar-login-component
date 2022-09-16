import React, { useState } from "react";
import chating from "../../asset/chating.jpeg";
import { Input } from "./Input";
import PasswordMeter from "./PasswordMeter";
const Login = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  // هذي الدالة مسؤولة عن التحويل من تعبئة بيانات الدخول الى تسجيل مستخدم جديد
  function switchForm() {
    setIsRegister((prevState) => !prevState);
  }

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  function passToLoginCallBack(data) {
    setFormState({ ...formState, password: data });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={chating}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {isRegister ? "Sign Up" : "Sign in to your account"}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {isRegister ? "Already have account?" : "Don't have account?"}
              <button
                className="font-medium text-indigo-600 background-transparent"
                onClick={switchForm}
              >
                &nbsp;{isRegister ? " Sign In here" : "Sign Up here"}
              </button>
            </p>
          </div>
          <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {/* First name input */}
              {isRegister && (
                <>
                  <Input
                    name="firstName"
                    type="text"
                    id="first-name"
                    label="First Name"
                    handleChange={handleChange}
                  />
                  {/* Last name input */}
                  <Input
                    id="last-name"
                    name="lastName"
                    type="text"
                    label="Last Name"
                    handleChange={handleChange}
                  />
                </>
              )}
              {/* Email input */}
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                label="Email address"
                handleChange={handleChange}
              />
              <PasswordMeter passToLoginCallBack={passToLoginCallBack} />
            </div>
            {/* When register form up */}
            {!isRegister && (
              <>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <button
                      className="font-medium text-indigo-600 background-transparent"
                      onClick={() => console.log("forget pass")}
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Submit  */}
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
          {/* Soical Login */}
          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white text-sm px-5 text-gray-500">
                OR continue with
              </span>
            </div>
          </div>
          {/* End Divider */}
          {/* Soical Login list. */}
          <button
            aria-label="Continue with google"
            role="presentation"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
              alt="google"
            />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
