import styled from 'styled-components';

//// ABOUT.JS ////
export const StyledAbout = styled.div`
    background-color: #ccc;
    min-height: 60vh;
    padding: 200px 0 220px 0;
    text-align: center;
`;


//// ABOUTCONTENT.JS ////
export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;

    h1{
        font-size: 3rem;
        margin-top: 0;
    }

    .about-para{
        font-size: 1.6rem;
        margin: auto;
        width: 80%
    }

    .about-photo{
        display: grid;
        font-size: 1.4rem;
        height: 200px;
        justify-content: start;
    }

    img{
        border-radius: 10px;
        height: 300px;
    }
`;
