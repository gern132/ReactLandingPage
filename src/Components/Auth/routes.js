import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {LinksPage} from "./LinksPage"
import {Logout} from '../Header/Logout.jsx'
import {Header} from '../Header/Header.jsx'

export const useRoutes = isAuthentificated => {
    if(isAuthentificated) {
        // const swithcRef = React.createRef()
        // function switchBG() {
        //     swithcRef.style.background = 'red';
        // }
        return (
            <div> 
                <Switch>
                    hello
                    <Route path="/links" exact render={() => <Logout />} />
                    {/* <Redirect to="/links" />

                    <Redirect to="/about" /> */}
                </Switch>
            </div>
        );
    }
else {
    return ( 
        <Switch>
            <Route path="/" render={() => <Header />} />
            <Redirect to="/" />
        </Switch>
    )
}
}