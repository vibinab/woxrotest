import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import { NavbarMenu } from './component/NavbarMenu';
import { Productlist } from './component/Productlist';
import {Icons } from "./component/Icons"
import { Footer } from './component/Footer';

function App() {
  return (
    <div className=''>
    <NavbarMenu />
    <Productlist />
    <Icons />
    <Footer />
    
    </div>
  );
}

export default App;
