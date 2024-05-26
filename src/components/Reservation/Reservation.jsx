import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    contact: '',
    email: '',
    adults: 0,
    children: 0,
    toddlers: 0,
    meal: '',
    dogs: [],
    agreement1: false,
    agreement2: false
  });

  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'adults' || name === 'children' || name === 'toddlers') {
      const parsedValue = Math.max(0, parseInt(value, 10) || 0);
      setFormData({ ...formData, [name]: parsedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDogChange = (e) => {
    const { name, value } = e.target;
    if (name === 'dogName') setDogName(value);
    if (name === 'dogBreed') setDogBreed(value);
  };

  const addDog = () => {
    setFormData({ ...formData, dogs: [...formData.dogs, { name: dogName, breed: dogBreed }] });
    setDogName('');
    setDogBreed('');
  };

  const removeDog = (index) => {
    const updatedDogs = formData.dogs.filter((_, i) => i !== index);
    setFormData({ ...formData, dogs: updatedDogs });
  };

  const handleAgreementChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const calculateTotal = () => {
    const adultsPrice = formData.adults * 1000;
    const childrenPrice = formData.children * 500;
    const toddlersPrice = formData.toddlers * 0;
    const dogsPrice = formData.dogs.length * 1000;
    setTotalPrice(adultsPrice + childrenPrice + toddlersPrice + dogsPrice);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Overnight Campus Booking</h1>
      <p className="mb-4">Please fill out the form below to reserve your spot.</p>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="date">Select Date</label>
        <select name="date" id="date" className="w-full p-2 border text-black" onChange={handleChange} value={formData.date}>
          <option value="">Select a date</option>
          <option value="june15">June 15 - Karjat</option>
          <option value="june17">June 17 - Wai</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-2" htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Name" className="w-full p-2 border text-black" onChange={handleChange} value={formData.name} />
        </div>
        <div className="flex-1">
          <label className="block mb-2" htmlFor="contact">Contact No</label>
          <input type="text" name="contact" id="contact" placeholder="Contact No" className="w-full p-2 border text-black" onChange={handleChange} value={formData.contact} />
        </div>
        <div className="flex-1">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" className="w-full p-2 border text-black" onChange={handleChange} value={formData.email} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-2" htmlFor="adults">No of Adults</label>
          <input type="number" name="adults" id="adults" placeholder="No of Adults" className="w-full p-2 border text-black" onChange={handleChange} value={formData.adults} />
        </div>
        <div className="flex-1">
          <label className="block mb-2" htmlFor="children">Children (5-13yrs)</label>
          <input type="number" name="children" id="children" placeholder="Children (5-13yrs)" className="w-full p-2 border text-black" onChange={handleChange} value={formData.children} />
        </div>
        <div className="flex-1">
          <label className="block mb-2" htmlFor="toddlers">Children below 5yrs</label>
          <input type="number" name="toddlers" id="toddlers" placeholder="Children below 5yrs" className="w-full p-2 border text-black" onChange={handleChange} value={formData.toddlers} />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="meal">Meal Preference</label>
        <select name="meal" id="meal" className="w-full p-2 border text-black" onChange={handleChange} value={formData.meal}>
          <option value="">Select a meal preference</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Dog Details</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block mb-2" htmlFor="dogName">Dog Name</label>
            <input type="text" name="dogName" id="dogName" placeholder="Dog Name" className="w-full p-2 border text-black" onChange={handleDogChange} value={dogName} />
          </div>
          <div className="flex-1">
            <label className="block mb-2" htmlFor="dogBreed">Dog Breed</label>
            <input type="text" name="dogBreed" id="dogBreed" placeholder="Dog Breed" className="w-full p-2 border text-black" onChange={handleDogChange} value={dogBreed} />
          </div>
          <button type="button" className="p-2 bg-black font-[cambria] border border-white text-white mt-4 md:mt-0 md:self-end rounded-lg" onClick={addDog}>Add Dog</button>
        </div>
        <ul>
          {formData.dogs.map((dog, index) => (
            <li key={index} className="flex justify-between items-center p-2 border mb-2">
              {dog.name} - {dog.breed}
              <button type="button" className="p-2 bg-red-500 text-white border border-white rounded-lg" onClick={() => removeDog(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <input type="checkbox" name="agreement1" id="agreement1" className="mr-2" onChange={handleAgreementChange} checked={formData.agreement1} />
          <label htmlFor="agreement1">Please read this agreement</label>
        </div>
        {!formData.agreement1 && <p className="text-red-500">Please read this</p>}
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <input type="checkbox" name="agreement2" id="agreement2" className="mr-2" onChange={handleAgreementChange} checked={formData.agreement2} />
          <label htmlFor="agreement2">Terms and Condition</label>
        </div>
        {!formData.agreement2 && <p className="text-red-500">Please read this</p>}
      </div>
      <Button className="font-['Cambria'] text-base bg-black p-[15px] flex items-center border border-white text-white" onClick={calculateTotal} ripple={true}>
        Calculate Total <MdKeyboardDoubleArrowRight className="text-xs ml-2"/>
      </Button>
      <div className="mt-4">
        <p>Total Price: ₹{totalPrice}</p>
      </div>

      <Button className="font-['Cambria'] text-base bg-black p-[15px] flex items-center border border-white text-white" ripple={true}>
        Pay <MdKeyboardDoubleArrowRight className="text-xs ml-2"/>
      </Button>
    </div>
  );
};

export default ReservationForm;
