import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="mainCont2">
            <nav className="navheader mt-2">

                <div className="col-md-9 navHeading">
                    <div className="col-md-3 navLogo">
                        <Link to="/"><img src="./images/colorGuessing_Logo.png" alt="ColorGuessing" /></Link>
                    </div>
                    <Link to="/">Randomized Color Lab</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;