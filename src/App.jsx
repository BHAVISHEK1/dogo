import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home0 from './components/Home0';
import Overnightcamps0 from './components/Overnight-camps0';
import Sailing0 from './components/Sailing0';
import Activity0 from './components/Activity0';
import TripInida0 from './components/TripInida0';
import About0 from './components/About0';
import Contact0 from './components/Contact0';
import Mainreservation from './components/Mainreservation';

function App() {
  return (
    <Router>
      <div className='h-screen w-screen bg-custom-gradient'>
        <Routes>
          <Route path="/" element={<Home0 />} />
          <Route path="/overnight-camps" element={<Overnightcamps0 />} />
          <Route path="/Sailing" element={<Sailing0 />} />
          <Route path="/activity" element={<Activity0 />} />
          <Route path="/tripindia" element={<TripInida0 />} />
          <Route path="/about" element={<About0 />} />
          <Route path="/contact" element={<Contact0 />} />
          <Route path="/Reservation" element={<Mainreservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
