import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const [id, setID] = useState("")

   const handleChange = (event) => {
      let {value} = event.target;
      setID(value);
   }

      return (
      <div>
          <input className={style.barra} type='search' onChange={handleChange} value={id}/>
         <button onClick={() => props.onSearch(id)}>
            Agregar</button> 
      </div>
   );
}
