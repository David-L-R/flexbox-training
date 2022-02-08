import './App.css';
import { Banner, Destinations, Footer, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Destinations/>
      <Footer/>
    </div>
  );
}

export default App;
