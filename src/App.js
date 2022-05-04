import "./App.css";
import { Banner, Destinations, Footer, Navbar } from "./components";
import { Squares } from "./components/squares/Squares";

function App() {
  return (
    <div className='App'>
      <div className='page'>
        <Navbar />
        {/* <Banner /> */}
        <Destinations />
        <Footer />
      </div>

      {/* <Squares /> */}
    </div>
  );
}

export default App;
