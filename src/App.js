import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Router } from "./router";

export default function App() {

  return (
  <>
    <Navbar/>
    <div sx = {{mt:'50vh'}}>
    <Router/>
    </div> 
    <Footer/> 
  </>
  );

}
