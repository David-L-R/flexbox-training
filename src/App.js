import "./App.css";
import { Banner, Destinations, Footer, Navbar, Squares } from "./components";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Destinations />
      <Footer />

      {/* <Squares /> */}
    </div>
  );
}

export default App;
