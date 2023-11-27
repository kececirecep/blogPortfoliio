import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import HomePage from './pages/HomePage'
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="container mx-auto">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:id' element={<BlogDetails/>} />
      </Routes>
    </div>  
    <Footer/>
    </>
  );
}

export default App;
