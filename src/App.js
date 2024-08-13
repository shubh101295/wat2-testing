import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';


function App() {

  const handleClick = () => {
    alert('Button clicked!');

  };

  // const buttons = [
  //   { text: 'Home', path: '/home' },
  //   { text: 'About', path: '/about' },
  //   { text: 'Contact', path: '/contact' },
  // ];

  // const htmlContent = ``;

  return (
    <div className="App">
      <header className="App-header">
      (Hotjar Github Version)
      <Router>
            <NavigationBar/>
            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/" element={<div> <img src={logo} className="App-logo" alt="logo" />
                        <p>
                          Lorem ipsum wali line 2
                        </p>
                        <Button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white', width: '150px', height: '50px' , justifyContent:'flex-start'}} alignment="centre">
                        Click Me!
                        </Button> </div>
                      }/>
                </Routes>
            </div>
        </Router>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum wali line 2
        </p>
        <Button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white', width: '150px', height: '50px' , justifyContent:'flex-start'}} alignment="centre">
        Click Me!
        </Button> */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
