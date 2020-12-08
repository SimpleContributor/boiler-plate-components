import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/sub-components/Navigation';
import Footer from './components/sub-components/Footer';
import Home from './components/Home';
import Photos from './components/Photos';
import About from './components/About';
import Contact from './components/Contact';
import ScrollToTop from './components/sub-components/ScrollToTop';
import './app.css';

class App extends Component {
    render() {
        const App = () => (
            <div>
                <Navigation />
                <Switch>
                    <ScrollToTop>
                        <Route exact path='/' component={Home} />
                        <Route path='/photos' component={Photos} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                    </ScrollToTop>
                </Switch>
                <Footer />
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
