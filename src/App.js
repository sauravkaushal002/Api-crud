// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Editemp from './components/Editemp'
import Addemp from './components/Addemp';
import EmpDetails from './components/EmpDetails'
function App() {
  return (
    <>
    <div className="App">
      <h1></h1>
    </div>
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<List/>}/>

        <Route path='/create' element={<Addemp/>}/>

        <Route path='/edit/:empid' element={<Editemp/>}/>

        <Route path='/detail/:empid' element={<EmpDetails/>}/>
    
      
    </Routes></BrowserRouter>
    </>
  );


}

export default App;
