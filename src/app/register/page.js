import Link from "next/link";
import RegisterForm from "../../components/Form";

function Register() {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      {/* First Section */}
      <div className="w-1/2 hidden sm:flex  h-full justify-center items-center flex-col space-y-4 bg-[#fff6ee]">
        <Link href="/about-me" className="text-blue-500 underline">
          Link to About Me
        </Link>
        <h2 className="text-5xl font-bold w-2/3 text-center leading-[70px]">
          Learn highly sought after skills without hassle.
        </h2>
        <p className="text-xl font-regular text-neutral-800">
          Earn a Diploma in highly-sought after skills.
        </p>

        <p className="text-base font-regular text-neutral-800">
          ©2023 Joseph Popoola. All rights reserved.
        </p>
      </div>

      {/* Second Section */}
      <div className="w-full sm:w-1/2 pt-16 pb-8 space-y-8 overflow-scroll h-full">
        <div className="px-8 sm:px-24">
          <div className="w-full flex flex-col items-start">
            <h2 className=" capitalize text-center text-3xl font-bold">
              Application Form
            </h2>
            <h3 className="mt-2 text-lg font-regular text-neutral-600">
              Fill in your details
            </h3>
          </div>

          {/* Text Input */}
          <div className="mt-8">
            <RegisterForm />

            <h4 className="mt-4 font-semibold text-center ">
              Already have an account?{" "}
              <span className="text-blue-600 font-semibold"> Sign In</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
