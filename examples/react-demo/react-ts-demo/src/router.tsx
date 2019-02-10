import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const AppRouter: React.StatelessComponent<{}> = () => (
    <HashRouter>
        <div>
            <Route component={App} />
            <Switch>
                    <Route component={About} path="/" exact={true} />
                    <Route component={Contact} path="/contact" />
            </Switch>
            <Route component={Footer} />
        </div>
    </HashRouter>
);