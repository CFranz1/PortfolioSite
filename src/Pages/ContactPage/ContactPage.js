import classes from "./ContactPage.module.css"
import ContactForm from "../../Components/ContactForm/ContactForm"


export let ContactPage = () => {

    return (
        <div className={classes.ContactsPageContainer}>
            <h1>Let's Connect</h1>
            <span> I'm available for a developer position and would love to connect. If you have any questions or requests, don't hesitate to reach out </span>
            <ContactForm></ContactForm>
        </div>
    )
}