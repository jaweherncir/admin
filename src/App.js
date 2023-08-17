import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,

  Route, 
 
  Routes
} from "react-router-dom";
import Login from './Components/Login/Login';
import Dashboard from './Components/Template/Dashboard';
import Aside from './Components/Template/Aside';
import Client from './Components/Template/Client';
import Reclamation from './Components/Template/Reclamation';
import Admin from './Components/Template/Admin';
import AddAdmin from './Components/Template/AddAdmin';
import UpdateAdmin from './Components/Template/UpdateAdmin';
import LoginAdmin from './Components/Login/LoginAdmin';
import DasbordAdmin from './Components/Template/DasbordAdmin';
import ClientAdmin from './Components/Template/ClientAdmin';
import ReclamationAdmin from './Components/Template/ReclamationAdmin';
import ClientEdit from './Components/Template/ClientEdit';
import Edit from './Components/Template/Edit';

function App() {
  return (
    <div className="App">
  <Router>
        <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Aside" element={<Aside/>}></Route>
        <Route path="/Client" element={<Client/>}></Route>
        <Route path="/Reclamation" element={<Reclamation/>}></Route>
        <Route path="/Admin" element={<Admin/>}></Route>
        <Route path="/addAdmin" element={<AddAdmin/>}></Route>
        <Route path="/updateAdmin/:id" element={<UpdateAdmin/>}></Route>
        <Route path="/loginAdmin" element={<LoginAdmin/>}></Route>
        <Route path="/ReclamationAdmin" element={<ReclamationAdmin/>}></Route>
        <Route path="/ClientAdmin" element={<ClientAdmin/>}></Route>
        <Route path="/DasbordAdmin" element={<DasbordAdmin/>}></Route>
        <Route path="/ClientEdit/:id" element={<ClientEdit/>}></Route>
        <Route path="/Edit/:id" element={<Edit/>}></Route>
        </Routes>

</Router>
    </div>
  );
}

export default App;
