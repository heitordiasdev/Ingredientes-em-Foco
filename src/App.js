import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Home } from './pages'

/* Teste */

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      </Routes> 
      <Footer/> 
    </Router>
  );
}
