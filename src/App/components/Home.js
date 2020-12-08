import React, { Component } from 'react';
import HomeContent from './sub-components/HomeContent';

import { StyledHome } from './homeStyle';


class Home extends Component {
    render() {
        return(
            <StyledHome>
                <HomeContent />
            </StyledHome>
        )
    }
}

export default Home;
