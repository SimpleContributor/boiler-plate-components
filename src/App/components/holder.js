import styled from 'styled-components';

export const StyledWrapper = styled.div`
justify-items: center;
display: grid;
grid-template-rows: auto 200px 200px;
line-height: 1.6;
padding-bottom: 100px;
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

h1.intro-pc{
    display: block;
}

h1.intro-mobile{
    display: none;
}

.paragraph{
    width: 50%;
}

.intro-container-para{
    font-size: 1.5rem;
    padding-bottom: 30px;
    text-align: center;
}

.project-link,
.contact-link{
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

div.button{
    align-items: center;
    display: grid;
    font-size: 2rem;
    height: 100%;
    justify-items: center;
    width: 100%;
}

@media (max-width: 1200px) {

}

@media (max-width: 768px) {
    .intro-pc{
        display: none;
    }

    .intro-mobile{
        display: block;
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

    .project-link,
    .contact-link{
        height: 100px;
        width: 290px;
    }
}
`