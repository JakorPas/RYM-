import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import {Link} from "react-router-dom"



export default function Nav({onSearch}) {
    return (
        <nav className = {style.nav}>
        <Link to= "/home" className={style.random}>Home</Link>   
        <Link to= "/about" className={style.random}>About</Link>  
        <SearchBar onSearch = {onSearch}/>
        <button className={style.random} onClick={() => onSearch(Math.floor(Math.random() * (827 - 1) + 1))}>
            Random Character

        </button>

        </nav>
    )
}

