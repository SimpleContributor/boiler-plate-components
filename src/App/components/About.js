import React, { Component } from 'react';
import styled from 'styled-components';
import AboutContent from './sub-components/AboutContent';

const StyledAbout = styled.div`
    background-color: #ccc;
    min-height: 55vh;
    padding: 210px 0 220px 0;
    text-align: center;
`;

class About extends Component {
    render() {
        return (
            <StyledAbout>
                <AboutContent />
            </StyledAbout>
        )
    }
}

export default About;
