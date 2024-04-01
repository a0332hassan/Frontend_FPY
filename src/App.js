import logo from './logo.svg';
import './App.css';
import Login from './user/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './user/Register';
import ForgotPassword from './user/ForgotPassword';
import RecoverPassword from './user/RecoverPossword';
import Dashboard from './Dashboard';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/forgot-password' Component={ForgotPassword}></Route>
        <Route path='/recover-password' Component={RecoverPassword}></Route>
        <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
