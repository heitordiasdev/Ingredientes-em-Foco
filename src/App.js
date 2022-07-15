import "./App.css";
import { Router } from "./router";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ViewUser from "./components/ViewUser";

export default function App() {
  return (
    <>
      <Navbar />
      <ViewUser />
      <Router />
      <Footer />
    </>
  );
}
