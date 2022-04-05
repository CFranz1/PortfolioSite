import { Link } from "react-router-dom"
import classes from "./Header.module.css"
import { useState } from "react"

export let Header = () => {

    const [renderPopUp, setPopUp] = useState(false);

    const renderLinkOptions = () => {
        if (renderPopUp)
            setPopUp(false);
        else
            setPopUp(true);
    }

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
            <div className={classes.NavIcon}>
                <i class="fa-solid fa-align-justify fa-xl" onClick={() => renderLinkOptions()}></i>
                {renderPopUp ?
                    <div className={classes.navBarPopUp}>
                        <Link to="/About" onClick={renderLinkOptions} >ABOUT</Link>
                        <Link to="/Projects" onClick={renderLinkOptions}>PROJECTS</Link>
                        <Link to="/Contact" onclick={renderLinkOptions}>CONTACT</Link>
                    </div>
                    : null}
            </div>
        </div>
    )
}
