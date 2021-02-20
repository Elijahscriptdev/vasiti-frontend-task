import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </div>
  );
}

export default App;
