import style from "./Card.module.css";
import {Link} from "react-router-dom";


export default function Card(props) {
   return (
      <div className= {style.container}>
         <button onClick={props.onClose}>X</button>
         <Link to={`/detail/${props.id}`}><h2 className = {style.titulo}>{props.name} </h2></Link>
         <h2 className = {style.titulo}>{props.status}</h2>
         <h2 className = {style.titulo}>{props.species}</h2>
         <h2 className = {style.titulo}>{props.gender}</h2>
         <h2 className = {style.titulo}>{props.origin.name}</h2>
         <img src={props.image} alt=''/> 
      </div>
   );
}
