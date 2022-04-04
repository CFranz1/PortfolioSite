import classes from "./HomePage.module.css"
import photo from './photo.jpg'
import IconWithLink from "../../Components/GithubButton/GithubButton"
export let HomePage = () => {

    return (
        <div className={classes.HomePageContainer}>
            <div className={classes.LeftSide}></div>
            <span className={classes.CollinCard}>
                <img src={photo} className={classes.photo} />
                <h1>Collin Franz</h1>
                <div className={classes.ColorLine}></div>
                <h2>Web Developer</h2>
                <div className={classes.ExternalLinks}>
                    <IconWithLink iconName="fa-brands fa-github" url="https://github.com/CFranz1"></IconWithLink>
                    <IconWithLink iconName="fa-brands fa-linkedin" url="https://www.linkedin.com/in/collin-franz-56a477173/"></IconWithLink>
                </div>
            </span>
            <span className={classes.IntroCard}>
                <h1> Hello</h1>
                {/* two buttons */}
                <span>I am a driven web developer with a passion for making pixel perfect front ends with React and fully functioning backends from the ground up.</span>
                <span>I am looking to join a company that is truly passionate about what they create.</span>
            </span>
        </div>
    )
}