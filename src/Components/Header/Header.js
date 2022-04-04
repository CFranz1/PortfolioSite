import { Link } from "react-router-dom"
import classes from "./Header.module.css"

export let Header = () => {
    return (
        <div className={classes.HeaderContainer}>
            <div className={classes.LogoSide}>
                <span id="Logo">Logo</span>
                <span className={classes.Name}>Collin Franz</span>
                <span id="JobTitle">Web Developer</span>
            </div>
            <div className={classes.NavBar}>
                <Link to="/About" >About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
    )
}
