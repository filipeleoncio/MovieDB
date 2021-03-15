import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PATH_NAMES from './utils/pathNames';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import './App.css';
import DataProvider from './components/store/Provider';
//teste
const App = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <Switch>
                    <Route path={PATH_NAMES.start} component={MainPage} />
                    <Route path={PATH_NAMES.login} exact component={Login} />
                </Switch>
            </DataProvider>
        </BrowserRouter>
    );
};

export default App;
