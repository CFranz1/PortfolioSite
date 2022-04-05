import classes from "./HomePage.module.css"
import photo from './photo.jpg'
import IconWithLink from "../../Components/IconWithLink/IconWithLink"
import Button from "../../Components/Button/Button"
import Resume from './CollinFranzResume.docx'
import { useNavigate } from "react-router-dom"
export let HomePage = () => {

    let navigate = useNavigate();

    const openResume = (e) => {
        e.preventDefault();
        window.open(Resume);
    }

    const pushToProjectsPage = (e) => {
        e.preventDefault();
        navigate("/Projects");
    }

    return (
        <div className={classes.HomePageContainer}>
            <div className={classes.LeftSide}></div>
            <span className={classes.CollinCard}>
                <img src={photo} className={classes.photo} />
                <h1>Collin</h1>
                <h1>Franz</h1>
                <div className={classes.ColorLine}></div>
                <h2>Web Developer</h2>
                <div className={classes.ExternalLinks}>
                    <IconWithLink iconName="fa-brands fa-github fa-xl" url="https://github.com/CFranz1"></IconWithLink>
                    <IconWithLink iconName="fa-brands fa-linkedin fa-xl" url="https://www.linkedin.com/in/collin-franz-56a477173/"></IconWithLink>
                </div>
            </span>
            <span className={classes.IntroCard}>
                <h1> Hello</h1>
                <div className={classes.ButtonContainer}>
                    <Button style="plain" onClickHandler={openResume}>resume</Button>
                    <Button style="outlined" onClickHandler={pushToProjectsPage}>projects</Button>
                </div>
                <span>I am a driven web developer with a passion for making pixel perfect front ends and fully functioning back ends from the ground up.</span>
                <span>I am looking to join a company as a Front-End, Back-End, or Full Stack Engineer in order to create amazing websites.</span>
            </span>
        </div>
    )
}