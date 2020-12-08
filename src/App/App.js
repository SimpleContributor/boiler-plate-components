import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Photos from './components/Photos';
import './app.css';

class App extends Component {
    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/photos' component={Photos} />
                </Switch>
            </div>
        )

        return(
            <Switch>
                <App />
            </Switch>
        )
    }
}

export default App;
