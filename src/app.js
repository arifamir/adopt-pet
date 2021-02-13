import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router'
import { Link } from "@reach/router";
import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <header>
                    <Link to="/"> Adopt me </Link>
                </header>
                <Router>
                    <SearchParams path="/"/>
                    <Details path="/details/:id" />
                </Router>
            </div>
        </React.StrictMode>
    );
};

// ReactDOOM render method takes two arguments
render(React.createElement(App), document.getElementById("root"));
