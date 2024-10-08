import Container from "../Shared/Container/Container";
import { HiArrowLongLeft } from "react-icons/hi2";

const AddAddress = () => {
  return (
    <section className="w-full px-5 md:px-0 my-10">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-6 text-gray-400">
          <span>Home</span> / <span>Add Address</span>
        </div>

        {/* Form Section */}
        <div className="border p-8 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-6">
            <HiArrowLongLeft size={24} />
            <h1 className="text-2xl font-bold">Billing Address</h1>
          </div>

          {/* Address Form */}
          <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* First Name */}
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border outline-none bg-[#EEF3FF]"
                placeholder="John"
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border outline-none bg-[#EEF3FF]"
                placeholder="Doe"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border outline-none bg-[#EEF3FF]"
                placeholder="Enter phone number"
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label
                htmlFor="emailAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border outline-none bg-[#EEF3FF]"
                placeholder="Enter email"
              />
            </div>

            {/* Street Address */}
            <div className="mb-4">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border outline-none bg-[#EEF3FF]"
                placeholder="Enter street address"
              />
            </div>

            {/* Town/City */}
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Town/City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border outline-none bg-[#EEF3FF]"
                placeholder="Enter town/city"
              />
            </div>

            {/* Apartment/Floor */}
            <div className="mb-4">
              <label
                htmlFor="apartment"
                className="block text-sm font-medium text-gray-700"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border outline-none bg-[#EEF3FF]"
                placeholder="Apartment, floor, etc."
              />
            </div>

            {/* Received Type */}
            <div className="mb-4">
              <label
                htmlFor="receivedType"
                className="block text-sm font-medium text-gray-700"
              >
                Received Type
              </label>
              <select
                id="receivedType"
                name="receivedType"
                className="w-full px-3 py-2 text-sm text-gray-700 rounded-lg border outline-none bg-[#EEF3FF]"
              >
                <option>Select received type</option>
                <option>Home Delivery</option>
                <option>Pick-up</option>
              </select>
            </div>

            {/* Save Address Checkbox */}
            <div className="col-span-full mb-4 flex items-center gap-2">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                className="text-primary"
              />
              <label htmlFor="saveInfo" className="text-sm text-gray-700">
                Save this information for faster check-out next time
              </label>
            </div>

            {/* Submit Button */}
            <div className="col-span-full flex justify-end">
              <div className="border-2 border-[#c90739] p-0.5 rounded-lg">
                <button className="w-full  bg-[#c90739] px-12 py-3 text-white rounded-md">
                  Add Address
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default AddAddress;
