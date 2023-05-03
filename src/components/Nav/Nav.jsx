import SearchBar from "../SearchBar/SearchBar"
import {Link, useLocation} from "react-router-dom"
import styles from "./Nav.module.css"
import LogOut from "../LogOut/LogOut"

const Nav = ({onSearch,logOut}) => {
    return(useLocation().pathname !== '/' ? 
        <div className={styles.containerNav}>
            <SearchBar onSearch={onSearch} />
            <Link to="/about">
                <button className={styles.buttonNav}>About</button>    
            </Link>
            <Link to="/home">
                <button className={styles.buttonNav}>Home</button>    
            </Link>
            <LogOut logOut={logOut}/>
        </div>
    :null
)
}

export default Nav