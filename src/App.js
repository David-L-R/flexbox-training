import "./App.css";
import { Banner, Destinations, Footer, Navbar } from "./components";
import { Squares } from "./components/squares/Squares";

function App() {
  return (
    <div className='App'>
      {/* <Navbar />
      <Banner />
      <Destinations />
      <Footer /> */}

      <Squares />
    </div>
  );
}

export default App;
