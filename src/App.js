
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import HomeScreen from './pages/HomeScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ProductScreen from './pages/ProductScreen';


function App() {
  return (
    <Router>
    <Header />
    <div className='py-3'>
      <Container>
      <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen/>}  />
          </Routes>
      </Container>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
