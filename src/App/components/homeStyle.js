import styled from 'styled-components';

//// HOME.JS ////
export const StyledHome = styled.div`
background-color: #ccc;
margin: 0;
width: 100vw;
`;




//// HOMECONTENT.JS ////
export const StyledWrapper = styled.div`
justify-items: center;
display: grid;
grid-template-rows: auto 200px 200px;
line-height: 1.6;
padding: 150px 0 220px 0;
width: 100%;


.intro-container{
    display: grid;
    justify-items: center;
}


h1{
    align-self: center;
    font-size: 3rem;
    margin-top: 30px;
    text-align: center;
    width: 100%;
}

.intro-pc{
    display: block;
    margin-bottom: 0;
}

.intro-mobile{
    display: none;
    margin-bottom: 0;
}

.paragraph{
    margin-bottom: 32px;
    width: 60%;
}

.intro-container-para{
    font-size: 1.6rem;
    padding-bottom: 30px;
    text-align: center;
}

.project-link{
    background-color: #888;
    border: 2px solid black;
    border-radius: 10px;
    color: #000;
    grid-column-start: 1;
    grid-column-end: 2;
    height: 130px;
    text-decoration: none;
    width: 455px;
}

.project-link:hover{
    background-color: #666666;
}

div.button{
    align-items: center;
    display: grid;
    font-size: 2rem;
    height: 100%;
    justify-items: center;
    width: 100%;
}

@media (max-width: 768px) {
    .intro-pc{
        display: none;
    }

    .intro-mobile{
        display: block;
    }

    .paragraph{
        width: 70%;
    }

    .intro-container-para{
        font-size: 1.4rem;
    }

    .project-link{
        height: 100px;
        width: 290px;
    }
}

@media (max-width: 500px) {
    grid-template-rows: auto 120px 120px;
    line-height: 1.8;

    h1{
        font-size: 2.4rem;
    }

    .paragraph{
        width: 100%;
    }

    .intro-container-para{
        font-size: 1.1rem;
        width: 310px;
    }

    .project-link{
        height: 100px;
        width: 250px;
    }
}
`;
