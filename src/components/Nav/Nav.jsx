import SearchBar from "../SearchBar/SearchBar"
import {Link} from "react-router-dom"
import styles from "./Nav.module.css"

const Nav = ({onSearch}) => {
    
    return(
        <div className={styles.containerNav}>
            <SearchBar onSearch={onSearch} />
            <Link to="/about">
                <button className={styles.buttonNav}>About</button>    
            </Link>
            <Link to="/home">
                <button className={styles.buttonNav}>Home</button>    
            </Link>
        </div>
    )
}

export default Nav