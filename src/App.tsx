// Css
import './scss/App.scss'

// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import Thankyou from './pages/Thankyou';


function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/thankyou' element={<Thankyou/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
