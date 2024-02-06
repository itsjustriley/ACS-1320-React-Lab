import { Outlet } from 'react-router-dom'

import './App.css';
import Title from './Title';
import Footer from './Footer';
import POPOSDetails from './POPOSDetails'

function App() {
  return (
    <div>
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
