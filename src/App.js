
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/shared/Header/Header';
import Login from './component/shared/Login/Login';
import Home from './component/Pages/Home/Home';
import About from './component/Pages/About/About';
import Order from './component/Pages/Order/Order';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/orders' element={<Order></Order>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;
