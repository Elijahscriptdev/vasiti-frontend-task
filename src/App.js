import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
// import Hero from "./components/hero/Hero";
// import Testimony from "./components/testimonies/Testimony";
import Footer from "./components/footer/Footer";
import "./App.css";
import Form from "./components/form/Form";
import Home from "./components/home/Home";

function App() {
  return (
    <div className='App'>
      {/* <NavBar /> */}
      {/* <Hero /> */}
      {/* <Testimony /> */}
      {/* <Footer /> */}
      <Router>
      <NavBar />
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/submit-testimonial' exact component={Form} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
