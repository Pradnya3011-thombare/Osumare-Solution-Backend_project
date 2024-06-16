import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactList from "./Components/Contacts/ContactList/ContactList";

import ViewContact from "./Components/Contacts/ViewContact/ViewContact";
import AddContact from "./Components/Contacts/AddContact/AddContact";
import NavBar from "./Components/NavBar/NavBar";
import './Style.css'
import EditContact from "./Components/Contacts/EditContact/EditContact";



function App() {
  return (
   <>
   <NavBar/>
   <Routes>
       <Route path="/" element={<Navigate to={'/contacts/list'}/>} />
       <Route path="/contacts/list" element={<ContactList/>} />
       <Route path="/contacts/add" element={<AddContact/>} />
       <Route path="/contacts/edit/:contactID" element={<EditContact/>}/>
       <Route path="/contacts/view/:contactID" element={<ViewContact/>} />
   </Routes>
   </>
  );
}

export default App;
