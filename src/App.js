//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Content from './Componants/Body/Content';
import Footer from './Componants/Footer';
import Header from './Componants/Body/Header';
import Navbar from './Componants/Navbar/Navbar';

function App() {
  return (
    <div>
      
      <Header></Header>
      <Navbar></Navbar>

      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
