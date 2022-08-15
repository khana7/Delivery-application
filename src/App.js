import logo from './logo.svg';
import HeaderMenu from './components/HeaderMenu';
import HeaderInfo from './components/HeaderInfo';
import Home from './components/Home';
import Works from './components/Works';
import Menu from './components/Menu';
import Order from './components/Order';
import Cafe from './components/Cafe';
import Footer from './components/Footer';





import './App.css';
import Test from './components/Test';


function App() {
  return (
    <div className="App">
      <HeaderMenu/>
      <HeaderInfo/> 
      <Home/> 
      <Works/>
      <Menu/>
      <Order/>
      <Cafe/>
      <Footer/>  
    </div>
  );
}

export default App;
