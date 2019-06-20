import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../component/Layout/index';

function BasicRouter() {
    return (
        <Router>
            <Route exact path="/" component={Layout} />
        </Router>
    );
}
export default BasicRouter;
