import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Router } from "./router";
import ViewUser from './components/ViewUser';

/* Teste */

export default function App() {

  return (
  <>
    <Navbar/>
    <div >
    <Router/>
    </div> 
    <Footer/> 
  </>
  );
}