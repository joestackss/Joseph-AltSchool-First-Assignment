import Button from "../shared/Button";
import { countriesData } from "../constants";

const RegisterForm = () => {
  return (
    <form className="flex flex-wrap justify-between items-center space-y-4 ">
      {/* First Name */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="firstname"
          className="text-[14px] font-regular leading-5"
        >
          First Name
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="firstname"
            type="text"
            placeholder="Enter first name"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Password */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="lastname"
          className="text-[14px] font-regular leading-5"
        >
          Last Name
        </label>

        <div className="pt-1 rounded-md">
          <input
            id="lastname"
            type="text"
            placeholder="Enter last name"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Gender */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label htmlFor="gender" className="text-[14px] font-regular leading-5">
          Gender
        </label>

        <div className="pt-1 rounded-md">
          <select
            required
            id="gender"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <option value="" disabled selected>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      {/* Date of Birth */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label htmlFor="dob" className="text-[14px] font-regular leading-5">
          Date of Birth
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="dob"
            type="date"
            placeholder="Enter your date of birth"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Email */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label htmlFor="email" className="text-[14px] font-regular leading-5">
          Email
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="email"
            type="text"
            placeholder="Enter email address"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Education Level */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="education"
          className="text-[14px] font-regular leading-5"
        >
          Education Level
        </label>

        <div className="pt-1 rounded-md">
          <select
            required
            id="education"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <option value="" disabled selected>
              Select level of education
            </option>
            <option value="bsc">Bsc</option>
            <option value="msc">Msc</option>
            <option value="diploma">Diploma</option>
            <option value="phd">Doctorate (PhD)</option>
            <option value="highschool">High School / Secondary School</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="middleschool">Junior / Middle School</option>
            <option value="postgraduate">Post Graduate</option>
          </select>
        </div>
      </div>

      {/* Country */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label htmlFor="country" className="text-[14px] font-regular leading-5">
          Country
        </label>

        <div className="pt-1 rounded-md">
          <select
            required
            id="country"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <option value="" disabled selected>
              Select your country
            </option>

            {countriesData.map((country) => (
              <option value={country.name} key={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* State/City of Residence */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="residence"
          className="text-[14px] font-regular leading-5"
        >
          State/City of Residence
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="residence"
            type="text"
            placeholder="Enter your State of Residence"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Employement Status */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="employementStatus"
          className="text-[14px] font-regular leading-5"
        >
          Employement Status
        </label>

        <div className="pt-1 rounded-md">
          <select
            required
            id="employementStatus"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <option value="" disabled selected>
              Select employement status
            </option>
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="selfEmployed">Self Employed</option>
          </select>
        </div>
      </div>

      {/* Phone Number*/}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="PhoneNumber"
          className="text-[14px] font-regular leading-5"
        >
          Phone Number
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="PhoneNumber"
            type="text"
            placeholder="08154387000"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Choose School */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label htmlFor="school" className="text-[14px] font-regular leading-5">
          Choose School
        </label>

        <div className="pt-1 rounded-md">
          <select
            required
            id="school"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <option value="" disabled selected>
              Select School
            </option>
            <option value="soce">School of Creative Economy</option>
            <option value="sob">School of Business</option>
          </select>
        </div>
      </div>

      {/* Choose School of Study */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="schoolOfStudy"
          className="text-[14px] font-regular leading-5"
        >
          Choose School of Study
        </label>

        <div className="pt-1 rounded-md">
          <select
            required
            id="schoolOfStudy"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <option value="" disabled selected>
              Select Course
            </option>
          </select>
        </div>
      </div>

      {/* How did you hear about us? */}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="schoolchannel"
          className="text-[14px] font-regular leading-5"
        >
          How did you hear about us?
        </label>

        <div className="pt-1 rounded-md">
          <select
            required
            id="schoolchannel"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <option value="" disabled selected>
              Select Channel
            </option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">Linkedin</option>
            <option value="youtube">Youtube</option>
            <option value="friend">Friend</option>
            <option value="whatsapp">Whatsapp</option>
            <option value="instagram">Instagram</option>
            <option value="billboard">Billboard</option>
          </select>
        </div>
      </div>

      {/* Schoolarship/Discount Code (Optional)*/}
      <div className="rounded-md w-full sm:w-[45%]">
        <label
          htmlFor="discountCode"
          className="text-[14px] font-regular leading-5"
        >
          Schoolarship/Discount Code
        </label>

        <div className="pt-1 rounded-md">
          <input
            required
            id="discountCode"
            type="text"
            placeholder="Schoolarship or student ID or discount code"
            className="bg-transparent mb-2 rounded-lg block w-full p-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      {/* Agree to terms and condition */}
      <div>
        <p className="text-neutral-600">
          By clicking continue, I agree to{" "}
          <span className="text-blue-600 font-semibold"> Terms of Use </span>{" "}
          and acknowledge that I have read the{" "}
          <span className="text-blue-600 font-semibold"> Privacy Policy. </span>
        </p>
      </div>

      {/* Button */}
      <div className="mt-4 w-full">
        <span className="flex w-full shadow-sm my-2">
          <Button
            title="Proceed"
            type="submit"
            className="bg-white mt-1 py-2 text-white font-bold text-base rounded-lg text-center flex justify-center w-full hover:bg-red-700"
          />
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
