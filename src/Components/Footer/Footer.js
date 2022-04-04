import classes from "./Footer.module.css"
import IconWithLink from "../IconWithLink/IconWithLink"
export let Footer = () => {
    return (
        <div className={classes.FooterContainer}>
            <div className={classes.footerBox}>
                <div>Call</div>
                <span>815-651-1323</span>
            </div>
            <div className={classes.footerBox}>
                <div>Write</div>
                <span>cfranz495@gmail.com</span>
            </div>
            <div className={classes.footerBox}>
                <div>Follow</div>
                <div className={classes.ExternalLinks}>
                    <IconWithLink iconName="fa-brands fa-github fa-lg" url="https://github.com/CFranz1"></IconWithLink>
                    <IconWithLink iconName="fa-brands fa-linkedin fa-lg" url="https://www.linkedin.com/in/collin-franz-56a477173/"></IconWithLink>
                </div>
            </div>
        </div>
    )
}
