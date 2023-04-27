import logo from './logo.svg';
import './App.css';
import Slider from './component/SliderComponent/Slider';
import StateContainer from './component/StComponent/StateContainer';
import Header from './component/HeaderComponent/Header';
import Footer from './component/FooterComponent/Footer';



function App() {


  return (

    <>
    <Header/>
    <div className="section">
      <Slider/>
      <StateContainer/>
    </div>
    <Footer/>  
    
    </>
 
  );
}

export default App;
