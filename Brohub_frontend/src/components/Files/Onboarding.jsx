import React, { useState } from 'react';

function Onboarding() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    interests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bhai form submission logic add yahn kr diyo
    console.log('Form Submitted!', formData);
    // fetch form data to your backend
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">    
      <div className="px-8 py-6 mx-auto bg-white rounded-lg shadow-md ">
        <div className="flex  justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-700">Onboarding</h1>
          <p className="text-green-500">Basic Info</p>
        </div>
        <h2 className="text-lg font-medium text-gray-700 mb-4">Get Started with us</h2>
        <p className="text-base text-gray-500 mb-8">Enter Your Details</p>
        <form id="form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-green-500 focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age:</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-green-500 focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="interests" className="block text-gray-700 font-bold mb-2">Your Interests:</label>
            <input type="text" id="interests" name="interests" value={formData.interests} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-green-500 focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="flex justify-end mt-4">
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-700">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Onboarding;
