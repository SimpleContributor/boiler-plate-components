import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UlStyles } from '../style';

const StyledUl = styled.ul`${UlStyles}`;

//nav-list and nav-links
const NavLinks = ({ open }) => {
    return (
        <StyledUl className="nav-list" open={open}>
            <Link to="/" className="nav-links">
                <li>Home</li>
            </Link>
            <Link to="/" className="nav-links">
                <li>Photos</li>
            </Link>
            <Link to="/" className="nav-links">
                <li>About</li>
            </Link>
            <Link to="/" className="nav-links">
                <li>Contact</li>
            </Link>
        </StyledUl>
    )
}

export default NavLinks;