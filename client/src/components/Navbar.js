import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="nav">
                    <div className="logo">
                        <Link to="/" className="programming">Programming<span className="blog">Blog</span></Link>
                    </div>
                    <div className="Add-Article">
                        <Link to="/add article" className="add-link">Add Article</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;