
import About from './Component/About';
import Intro from './Component/Intro';
import ProductList from './Component/ProductList';
import Contact from './Component/Contact';
import Toggle from './Component/Toggle';
import { useContext} from 'react';
import { ThemeContext } from './context';


function App() {
  
  const theme =useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{backgroundColor :darkMode ? "#222" : "white" , color :darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
