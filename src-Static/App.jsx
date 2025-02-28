
import Header from './components/Header';
import Content from './components/Content';
import Services from './components/Services';
import Stats from './components/Stats';
import Gallary from './components/Gallary';
import MenuLink from './components/MenuLink';
import Footer from './components/Footer';
import './App.css';

function App() {
  

  return (
    <>
    <div className="container">
      <Header/>
      <Content/>
      <Services/>
      <Stats/>
      <hr />
      <div class="row column">
      <h3>Our Recent Work</h3>
    </div>
      <Gallary/>
      <MenuLink/>
      <hr/>
      <Footer/>
      </div>
    </>
  )
}

export default App
