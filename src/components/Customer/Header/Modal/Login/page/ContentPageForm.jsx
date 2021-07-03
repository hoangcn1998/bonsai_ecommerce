import React, {useContext} from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const ContentPageForm = () => {
    return (
        <>
            <Route exact path="/" component={FormLogin}></Route>
            <Route  path="/Register" component={FormRegister}></Route>
        </>
    );
};

export default ContentPageForm;
