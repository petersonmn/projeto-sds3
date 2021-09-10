import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component = { Home } path="/" exact />
                <Route component = { Dashboard } path="/dashboard" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
