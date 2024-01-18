import "./App.css";
import HomePage from "./Pages/homepage";
import Gallery1 from "./Pages/b-and-w";
import Gallery2 from "./Pages/cars";
import Gallery3 from "./Pages/animals";
import Gallery4 from "./Pages/landscape";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/black-and-white" element={<Gallery1 />}/>
          <Route path="/cars" element={<Gallery2 />}/>
          <Route path="/animals" element={<Gallery3 />}/>
          <Route path="/landscape" element={<Gallery4 />}/>
        </Routes>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
