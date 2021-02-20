import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hero from "./components/hero/Hero";
import Testimony from "./components/testimonies/Testimony";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
