import { Link } from "react-router-dom"
import classes from "./Header.module.css"

export let Header = () => {
    return (
        <div className={classes.HeaderContainer}>
            <div className={classes.LogoSide}>
                <span className={classes.Name}>Collin Franz</span>
                <span className={classes.Slash}>/</span>
                <span className={classes.Title}>Web Developer</span>
            </div>
            <div className={classes.NavBar}>
                <Link to="/About" >ABOUT</Link>
                <Link to="/Projects">PROJECTS</Link>
                <Link to="/Contact">CONTACT</Link>
            </div>
        </div>
    )
}
