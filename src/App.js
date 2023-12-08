import './App.css';
import Navbar from './Components/navbar/navbar';
import Home from './Components/home/home';
import About from './Components/about/about';
import Gallery from './Components/gallery/gallery';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
