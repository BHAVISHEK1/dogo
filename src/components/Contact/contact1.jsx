import React, { useState } from 'react';

const Contact1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Clear all input fields after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="container mx-auto p-4 bg-custom-gradient mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="mb-4 text-white">TRAVOWLET ADVENTURE TOURS</p>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 21.914a1.119 1.119 0 01-1.586-1.586l4.243-4.243M6.571 4.571a1.119 1.119 0 011.586 1.586l4.243 4.243M12 12m-4 0h8"
              />
            </svg>
            <span className="ml-2">
              <p className="font-bold text-white">Location</p>
              <p className="text-white">
                202 Shri Madhuban, Jay Prakash Nagar Rd No-3, Jay Prakash
                Nagar, Goregaon, Mumbai, Maharashtra 400063
              </p>
            </span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.28a1 1 0 01-1-.684l-1.498-4.493a1 1 0 01.502-1.21l2.257-1.13a11.042 11.042 0 00-5.516-5.516l-1.13 2.257a1 1 0 01-1.21.502l-4.493-1.498a1 1 0 01-.948-.684V5z"
              />
            </svg>
            <span className="ml-2">
              <p className="font-bold text-white">Call us</p>
              <a href="#">
              <p className="text-white hover:text-red-500 hover:underline">+91 97691 19994</p>
              </a>
            </span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="ml-2">
              <p className="font-bold text-white">Email Us</p>
              <a href="#">
                <p className="text-white hover:text-red-500 hover:underline">Travowlet@gmail.com</p>
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Send us a message</h2>
          <p className="mb-4 text-white">
            For bookings, sponsorships & other enquiries
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-bold mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-white font-bold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-6 flex-grow">
              <label
                htmlFor="message"
                className="block text-white font-bold mb-2"
              >
                Your message (optional)
              </label>
              <textarea
                id="message"
                className="shadow appearance-none border rounded h-[150px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
