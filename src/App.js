
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Maui from './components/pages/Maui';
import Kauia from './components/pages/Kauai';
import Kona from './components/pages/Kona';
import Oahu from './components/pages/Oahu';

function App() {

  
  return (
    <>
    
    <Router>
    <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/maui' component={Maui}/>
        <Route path='/kauai' component={Kauia}/>
        <Route path='/kona' component={Kona}/>
        <Route path='/oahu' component={Oahu}/>

      </Switch>
      <Footer/>
      
    </Router>
    
    
    </>
  );
}

export default App;
