import React, { Component } from 'react';
import Navigation from './sub-components/Navigation';
import ProjectsContent from './sub-components/ProjectsContent';
import Footer from './sub-components/Footer';
import { ProjectsWrapper } from './photosStyle';

class Projects extends Component {
    render() {
        return(
            <ProjectsWrapper>
                <Navigation />
                <ProjectsContent />
                <Footer />
            </ProjectsWrapper>
        )
    }
}

export default Projects;
