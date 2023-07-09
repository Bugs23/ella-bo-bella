import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function App() {
  	return (
	<>
	    <Navbar />
	    <Header />
        <Skills />
	    <Portfolio />
        <Experience />
	    <AboutMe />
	    <Footer />
    </>
  )
}
