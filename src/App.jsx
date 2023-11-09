import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Banner } from './components/Banner';
import { Pricing } from './components/Pricing';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="UCond">
      <NavBar />
      <Banner />
      <Pricing />
    </div>
    
  )
}

export default App
