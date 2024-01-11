import "./App.css";
import HomePage from "./Pages/homepage";
import BandW from "./Pages/b-and-w";
// import Navbar from "./Components/navbar/navbar";
// import Footer from "./Components/footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar /> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/b-and-w" element={<BandW />}/>

        </Routes>
      </div>
      
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
