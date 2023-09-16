import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from "axios"
import {Route,Routes, useLocation, useNavigate} from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail"; 
import Form from "./components/Forms/Forms";



function App() {
   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'user@mail.com';
   const PASSWORD = 'Pass123Ñ';

//login original por si se rompe to'
   /*function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }*/

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const uspas = await
      axios(URL + `?email=${email}&password=${password}`)
      console.log (uspas)
         const { access } = uspas.data;
         setAccess(uspas.data);
         access && navigate('/home');
      }
   
   
   function logout() {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   async function onSearch(id) {
      if (id === "") return window.alert("Introduce un ID");
      if (id<1) return window.alert("Personaje no existente, sólo números mayores a 0");
      if (id>826) return window.alert("Personaje no existente, el id máximo permitido es 826");
      const onList = characters.find((character) => character.id === Number(id));
      if (onList) return window.alert("Este personaje ya forma parte de tu lista");
      const response = await
      axios(`http://localhost:3001/rickandmorty/character/${id}`) 
      const caracteres = response.data
      setCharacters([caracteres, ...characters]);
      }
   
   function onClose(id) {
      setCharacters(characters.filter((character) => character.id !== id));
   }
   const location = useLocation();
   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout}/>}
         <Routes>
            <Route path="/" element={<Form login={login}/>}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
   



