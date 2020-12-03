import React from "react";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <span style={{ color: "#fff", top: "1rem", left: "1rem", position: "relative"}}>
                    &copy;{new Date().getFullYear()}All Rights Reserved. RajuCoding.
                </span>
            </div>
        </>
    );
};

export default Footer;