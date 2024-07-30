import './App.css';
import Hero from './companents/hero/Hero';
import Service from './companents/service/service';
import About from './companents/about/About';
import Years from './companents/years/Years';
import Says from './companents/says/Says';
import From from './companents/from/From';
import Dont from './companents/dont/Dont';
function App() {

  return (
    <div className="App">
     <Hero/>
     <Service/>
      <About/>
      <Years/>
      <Says/>
      <From/>
      <Dont/>
    </div>
  );
}

export default App;
