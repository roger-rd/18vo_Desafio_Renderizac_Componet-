import { useState } from "react";
import React from 'react';
import {baseColaboradores} from "./api/baseColaboradores"
import Form from "./components/Form"
import Navbar from './components/Navbar';
import List from "./components/List";


const App = () => {
const [bdatos, setBdatos] = useState(baseColaboradores);
const [name,setName] = useState ("");
const [email,setEmail] = useState ("");
const [search, setSearch] = useState("");
const [errorName , setErrorName]= useState ("");
const [errorEmail , setErrorEmail]= useState ("");


const handleSubmit = e =>{
    e.preventDefault()
    setErrorName("");
    setErrorEmail("");


    if(!name.trimStart()){
        return setErrorName('Ingrese Nombre')
    }
    if(!email.trimStart()){
        return setErrorEmail('Ingrese Nombre')
    }

    const newBdatos = {
        name: name,
        email: email,
        id: Date.now()
    }

    setBdatos([...bdatos, newBdatos])
    setName("")
    setEmail("")
}

    return (
    <>
    <div className= "card container m-4 p-4">
    <Navbar
    setSearch={setSearch}
    />
    <Form
    handleSubmit={handleSubmit}
    name={name}
    setName={setName}
    email={email}
    setEmail={setEmail}
    value={name}
    errorName={errorName}
    errorEmail={errorEmail}
    />
    </div>
    <div className= "card container m-4 p-4">
        <h1>Listado de Colaboradores</h1>
        <div className="container">
            <List bdatos={bdatos} search={search}/>
            
        </div>
    </div>
        </>
    );
}


export default App;





