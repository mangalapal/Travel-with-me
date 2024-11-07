  import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
