import React from "react";


const IconWithLink = ({
    iconName,
    url,
}) => {
    const openExternalTab = (url) => {
        window.open(url)
    }
    return (
        <i
            className={iconName}
            onClick={() => { openExternalTab(url) }}
        >
        </i>
    );
};

export default IconWithLink;