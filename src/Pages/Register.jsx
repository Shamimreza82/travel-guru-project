import React from "react";

const Register = () => {
  return (
    <div className="">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg border mt-4 space-y-4">
        <div className="flex  mx-auto">
          <div>
            <h1 className="text-left font-bold text-2xl">Create an account</h1>
          </div>
        </div>

        <form className="mt-6 ">
          <div>
            <label for="name" className="block text-sm  ">
              First name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="FName"
            />
          </div>
          <div>
            <label for="name" className="block text-sm  ">
              Last Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="LName"
            />
          </div>
          <div>
            <label for="username" className="block text-sm  ">
              Username or email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="email"
            />
          </div>

          <div className="">
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm   text-gray-800">
                Password
              </label>
            </div>

            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="">
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm   text-gray-800">
               Confirm Password
              </label>
            </div>

            <input
              type="password"
              name="password"
              className="block w-full px-4 py-2 mt-2  bg-white border rounded-lg  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-3">
            <button className=" btn bg-[#F9A51A] w-full px-6 py-2.5 text-sm font-medium ">
              Login
            </button>
          </div>
        </form>
      </div>


    {/* Social media login section */}
      <div className="w-full max-w-sm px-6 m-auto mx-auto bg-white rounded-lg mt-4">
      <div className="flex items-center justify-between mb-3 ">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-2/5"></span>

        <a
          href="#"
          className="text-xs text-center text-gray-500 uppercase  hover:underline"
        >
          or 
        </a>

        <span className="w-1/5 border-b dark:border-gray-600 lg:w-2/5"></span>
      </div>
      <div className=" space-y-2 items-center -mx-2">
        <button // google login 
          type="button"
          className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium  transition-colors duration-300 transform rounded-lg border hover:bg-blue-400  focus:outline-none"
        >
          <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
          </svg>

          <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
        <button  // facebook login
          type="button"
          className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium  transition-colors duration-300 transform rounded-lg border hover:bg-blue-400  focus:outline-none"
        >
          <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
          </svg>

          <span className="hidden mx-2 sm:inline">Sign in with Facebook</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Register;
