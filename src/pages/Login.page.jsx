import { Link } from "react-router-dom";
import LoginForm from "../components/forms/Login.form";

export default function LoginPage() {
  return (
    <div className="w-full min-w-full min-h-screen max-h-screen md:flex items-center justify-center">
      {/* Left */}
      <div className="md:w-1/2 md:block hidden bg-amber-300 h-screen max-h-screen overflow-hidden relative">
        <div
          className="bg-no-repeat w-full bg-center bg-cover h-screen"
          style={{ backgroundImage: `url("/bg.svg")` }}
        >
          <img
            src="/logo.svg"
            alt="logo"
            className="lg:left-12 left-7 top-12 fixed lg:w-32 w-28"
          />
          <h1 className="absolute top-32 lg:left-12 left-7 lg:text-4xl text-3xl font-medium text-white">
            Enjoy the Convenience of <br />
            Beam Space Storage
          </h1>
        </div>
      </div>

      {/* Right */}
      <div className="md:w-1/2 w-full bg-[#FAFBFF] md:h-screen md:py-0 py-10 flex items-center justify-center flex-col gap-y-5 relative">
        <h5 className="text-[#EB2730] font-semibold text-left text-2xl">
          Log in to Beam Space
        </h5>

        <div className="flex items-center justify-center flex-col lg:w-[450px] sm:w-[400px] w-full gap-y-4 sm:px-0 px-4">
          <button
            className="flex items-center justify-center w-full shadow py-3 rounded-md bg-white gap-x-3 font-medium hover:bg-[#FAFBFF]"
            name="login"
          >
            <iconify-icon icon="logos:google-icon" />
            <span>Log in with Google</span>
          </button>
          <button
            name="register"
            className="flex items-center justify-center w-full shadow py-3 rounded-md bg-[#3A589B] hover:bg-[#234794] gap-x-3 font-medium text-white"
          >
            <iconify-icon icon="eva:facebook-fill" />
            <span>Log in with Facebook</span>
          </button>

          <span className="text-gray-400">or login with your email</span>
        </div>

        <div className="flex flex-col items-center justify-center lg:w-[450px] sm:w-[400px] w-full sm:px-0 px-4">
          <LoginForm />

          <div className="flex flex-col items-center justify-center mt-5 gap-y-3 text-center">
            <Link className="text-[#00ACEE]" to="#">
              Forgot Email?
            </Link>

            <h5>
              Don’t have an account?{" "}
              <Link to="#" className="text-[#00ACEE]">
                Create an account
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
