import classes from "./ProjectsPage.module.css"
import IconWithLink from "../../Components/IconWithLink/IconWithLink"
import Button from "../../Components/Button/Button"
import ProjectBox from "../../Components/ProjectBox/ProjectBox"
import DataTees from "../../ProjectImages/DataTees.PNG"
import GitFit from "../../ProjectImages/GitFit.PNG"
import StrangersThings from "../../ProjectImages/StrangersThings.PNG"
export let ProjectsPage = () => {

    return (
        <div className={classes.ProjectsPageContainer}>
            <h1>PROJECTS</h1>
            <ProjectBox
                name="Data Tees"
                description="A stylish website designed to sell Tee shirts implementing a custom back-end and a user-friendly stylish front-end with password encryption."
                github="https://github.com/Team-Red2/Shopper"
                deployment="https://datatees495.herokuapp.com/products"
                image={DataTees}
            ></ProjectBox>

            <ProjectBox
                name="Git Fit"
                description="A full stack fitness website with an intuitive user interface, designed to help its users attain their fitness goals."
                github="https://github.com/CFranz1/GitFit"
                deployment="https://gitfit495.herokuapp.com/"
                image={GitFit}
            ></ProjectBox>

            <ProjectBox
                name="Stranger's Things"
                description="A lite Craigslist clone that allows registered users to post entries and send/receive messages."
                github="https://github.com/CFranz1/StrangersThings"
                deployment="https://reverent-borg-7a771e.netlify.app"
                image={StrangersThings}
            ></ProjectBox>

        </div>
    )
}