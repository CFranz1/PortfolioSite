import React, { useState } from "react";
import classes from "./ContactForm.module.css"
import Button from "../Button/Button";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/e2a25680-b500-11ec-b4fe-2b9cbf782176";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form
            className={classes.Form}
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <span>Name</span>
            <input type="text" name="name" required />
            <span> Email</span>
            <input type="email" name="email" required />
            <span>Message</span>
            <textarea name="message" cols="30" rows="8" required />
            <div>
                <Button type="submit" style="outlined"> Send a message </Button>
            </div>
        </form>
    );
};

export default ContactForm;