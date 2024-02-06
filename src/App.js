// import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import POPOSList from './POPOSList';

import Title from './Title';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} alt="" /> */}
      <Title />
      <POPOSList />
      <Footer />
    </div>

  );
}

export default App;
