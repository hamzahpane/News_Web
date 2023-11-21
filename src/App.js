import { Route, Routes } from 'react-router-dom';
import Head from './Komponen/Navbar.jsx';
import General  from './page/General.jsx';
import Sports  from './page/Sports.jsx';
import Technology from './page/Technology.jsx';
import Scince from './page/Scince.jsx';

function App() {
  return (
    <div>
        <Head/>
        <Routes>
          <Route path="/General" element={<General/>}/>
          <Route path="/Sports" element={<Sports/>}/>
          <Route path="/Technology" element={<Technology/>}/>
          <Route path="/Scince" element={<Scince/>}/>
        </Routes>
    </div>
  );
}

export default App;
