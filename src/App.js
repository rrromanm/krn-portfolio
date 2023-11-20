import './App.css';
import Navbar from './Components/navbar/navbar';
import Home from './Components/home/home';
import About from './Components/about/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
