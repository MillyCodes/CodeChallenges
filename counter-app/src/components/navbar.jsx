import React from "react";

//stateless functional component - since this class has a single method, no event handler or helper methods to calculate values and no state either, in this situation we can convert this to a stateless functional component. In functional components you have to manually pass in the props parameter. Life cycle hooks cannot be used here.

const NavBar = ({ totalCounters }) => {
    console.log("Nav-Bar rendered");
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;
