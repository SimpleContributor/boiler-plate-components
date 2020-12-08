import React, { Component } from 'react';
import Navigation from './sub-components/Navigation';
import Footer from './sub-components/Footer';
import HomeContent from './sub-components/HomeContent';

import { StyledHome } from './homeStyle';

class Home extends Component {
    render() {
        return(
            <StyledHome>
                <Navigation />
                <HomeContent />
                <Footer />
            </StyledHome>
        )
    }
}

export default Home;
