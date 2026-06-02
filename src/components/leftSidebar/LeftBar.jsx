import React, { useState } from 'react'

const LeftBar = () => {
    const stateCities = {
        Delhi: ["New Delhi"],
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Karnataka: ["Bengaluru", "Mysuru", "Hubli"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
        Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
    };
    
    const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    gstNumber: "",
    panNumber: "",
    premise: "",
    street: "",
    state: "",
    city: "",
    country: "India",
    pinCode: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // error clear on type
    const { name, value } = e.target;
    if (name === "state") {
      setFormData((prev) => ({ ...prev, city: "" })); // reset city on state change
    }else {
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName) newErrors.companyName = "Company Name required";
    if (!formData.email) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.premise) newErrors.premise = "Premise required";
    if (!formData.street) newErrors.street = "Street required";
    if (!formData.state) newErrors.state = "State required";
    if (!formData.city) newErrors.city = "City required";
    if (!formData.pinCode) newErrors.pinCode = "Pin Code required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    console.log("✅ Form Submitted Successfully!");
    console.log("📋 Form Data:", formData);
  };

  const handleCancel = () => {
    setFormData({
      companyName: "", email: "", gstNumber: "",
      panNumber: "", premise: "", street: "",
      state: "", city: "", country: "India", pinCode: "",
    });
    setErrors({});
    setSubmitted(false);
    console.log("❌ Form Cancelled & Reset");
  };
  return (
    <div className=" rounded-[10px] pt-[30px] px-[22px] w-full  lg:w-[55%] h-[680px] bg-white" style={{background:"rgb(255,255,255)"}}>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Review your details</h1>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Billing Information</h3>
            {submitted && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                ✅ Details saved successfully!
                </div>
            )}
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="abhigyan"
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                        {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                </div>
            {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="abhigyan.pandey@getreelax.com"
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
            {/* GST Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        GST Number <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        name="gstNumber"
                        value={formData.gstNumber}
                        onChange={handleChange}
                        placeholder="GST Number"
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50"
                    />
                </div>
            {/* Pan Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        PAN Number <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleChange}
                        placeholder="PAN Number"
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50"
                    />
                </div>
            {/* Premise */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Premise/House no.
                    </label>
                    <input
                        type="text"
                        name="premise"
                        value={formData.premise}
                        onChange={handleChange}
                        placeholder="Premise/House no."
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50"
                    />
                    {errors.premise && <p className="text-red-500 text-xs mt-1">{errors.premise}</p>}
                </div>
            {/* Street */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street
                    </label>
                    <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        placeholder="Street"
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50"
                    />
                    {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
                </div>

            {/* state */}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                    </label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50"
                    >
                        <option value="">Select state</option>
                        <option>Delhi</option>
                        <option>Maharashtra</option>
                        <option>Karnataka</option>
                        <option>Tamil Nadu</option>
                        <option>Uttar Pradesh</option>
                        <option>Gujarat</option>
                        <option>Rajasthan</option>
                    </select>
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                    </div>

            {/* City */}

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                    </label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50"
                    >
                            <option value="">Select city</option>
                            {formData.state && stateCities[formData.state]?.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                            {/* <option >Mumbai</option>
                            <option>Bengaluru</option>
                            <option>Delhi</option>
                            <option>Chennai</option>
                            <option>Lucknow</option>
                            <option>Ahmedabad</option>
                            <option>Jaipur</option> */}

                    </select>
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                
                </div>
                {/* Country */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                    </label>
                    <input
                        type="text"
                        value="India"
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50"
                    />
                </div>
                {/* Pin Code */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pin Code
                    </label>
                    <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="Pincode"
                        className="w-full h-12 px-4 border border-gray-300 rounded-md bg-gray-50"
                    />
                     {errors.pinCode && <p className="text-red-500 text-xs mt-1">{errors.pinCode}</p>}
                </div>
            </div>
            <div className="w-full h-px bg-gray-300 mt-5 mb-5">
            </div>
            <div className="flex justify-end">
                <button type="button" onClick={handleCancel} className="bg-transparent px-4 py-2 font-bold text-sm rounded-[2px]"  style={{border:"1px solid rgb(237,238,241)"}}>Cancel</button>
                <button type="submit" className="text-white font-bold px-3 py-2 text-sm ml-4 rounded-[2px]" style={{background:"rgb(25,119,242)"}}>Save Details</button>
            </div>

        </form>
    </div>
  )
}

export default LeftBar