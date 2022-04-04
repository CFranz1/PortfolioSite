import React from "react";
import classes from "./Button.module.css";

const Button = ({
    type,
    style,
    width,
    isDisabled = false,
    onClickHandler,
    children,
}) => {
    onClickHandler = onClickHandler || function (event) { };
    return (
        <button
            type={type}
            onClick={onClickHandler}
            className={`${classes.button} ${classes[style]}`}
            style={width ? { width: width } : {}}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};

export default Button;