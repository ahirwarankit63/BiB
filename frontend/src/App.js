import "./App.css";
import Navbar from "./component/Navbar/Navbar"
// import Carousel from "./component/Carousel/Carousel.js"
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>

      <Navbar/>
      {/* <Carousel /> */}
    </Router>
  );
}

export default App;
