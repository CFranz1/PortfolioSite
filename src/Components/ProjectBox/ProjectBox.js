import React from "react";
import classes from "./ProjectBox.module.css";
import Button from "../Button/Button";

const ProjectBox = ({
    image,
    name,
    github,
    deployment,
    description

}) => {
    const linkFollower = (link) => {
        window.open(link);
    }
    return (
        <div className={classes.projectBox}>
            <div className={classes.projectDetails}>
                <h1>{name}</h1>
                <span className={classes.description}>{description}</span>
                <div className={classes.buttonContainer}>
                    <Button style="plain" onClickHandler={() => { linkFollower(github) }}>Link to Github</Button>
                    <Button style="outlined" onClickHandler={() => { linkFollower(deployment) }}>Link to deployment</Button>
                </div>
            </div>
            <img className={classes.image} src={image}></img>
        </div>
    );
};

export default ProjectBox;