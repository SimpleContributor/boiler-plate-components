import styled, { css } from 'styled-components';

//// HOME.JS ////
export const StyledHome = styled.div`
background-color: #ccc;
min-height: 1280px;
margin: 0;
padding: 150px 0 0 0;
width: 100vw;

@media (max-width: 1050px) {
    min-height: 1400px;
}

@media (max-width: 768px) {
    min-height: 1150px;
}

@media (max-width: 500px) {
    min-height: 920px;
}
`




//// HOMECONTENT.JS ////
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
`


//// NAVIGATION.JS ////
export const StyledNav = styled.div`
align-items: center;
background-color: #888;
border-bottom: 2px solid black;
display: grid;
grid-template-columns: 120px auto;
height: 120px;
left: 0;
position: fixed;
top: 0;
width: 100%;

&:nth-child(1){
    justify-items: end;
}

.img-link{
    align-items: center;
    display: grid;
    height: 120px;
    justify-items: center;
    margin-left: auto;
}

.logo-img{
    height: 100px;
}
`

//// BURGERLINKS.JS ////
export const BurgerStyles = css`
display: none;
height: 60px;
position: fixed;
right: 30px;
top: 30px;
width: 60px;
z-index: 30;


@media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
}

div{
    background-color: ${({ open }) => open ? '#000' : '#000'};
    border-radius: 10px;
    height: 8px;
    transform-origin: 8px;
    transition: all 0.3s linear;
    width: 60px;

    &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg) translateX(25%)' : 'rotate(0)'};
    }

    
    &:nth-child(2) {
        opacity: ${({ open }) => open ? 0 : 1};
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    }

    &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg) translateX(25%)' : 'rotate(0)'};
    }
}
`


//// NAVLINKS.JS ////
export const UlStyles = css`
display: grid;
grid-template-columns: repeat(4, 120px);
grid-column-gap: 50px;
list-style: none;

.nav-links{
    align-items: center;
    color: #000;
    display: grid;
    font-size: 1.6rem;
    height: 50px;
    text-decoration: none;
}

.nav-links:hover{
    font-size: 1.9rem;
}

li {
    z-index: 20;
}

@media (max-width: 768px) {
    align-items: center;
    background-color: #888;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 110px);
    min-height: 500px;
    justify-items: center;
    padding-top: 36px;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    width: 99vw;
    z-index: 20;

    li {
        color: #000;
        font-size: 2rem;
        font-weight: 500;
        z-index: 20;
    }
}
`


//// FOOTER.JS ////
export const StyledFooter = styled.div`
background-color: #888;
border-top: 2px solid black;
bottom: 0;
display: grid;
grid-template-columns: 1fr 1fr;
height: 120px;
left: 0;
padding: 16px 60px;
position: absolute;
width: 100vw;

.created-by{
    align-items: center;
    display: grid;
}

p{
    font-size: 1.6rem;
    margin: 0;
}

.social-links{
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-right: 100px;
}

.social-links img{
    width: 80px;
}

@media (max-width: 1200px){
    grid-template-columns: 1fr 2fr;
}

@media (max-width: 768px){
    grid-template-columns: 1fr 3fr;

    

    p{
        align-self: center;
        font-size: 1.2rem;
    }

    .social-links img{
        width: 60px;
    }
}

@media (max-width: 500px){
    grid-template-columns: 1fr;
    padding: 16px 0;

    .social-links{
        margin-right: 0;
        padding-right: 10px;
    }

    .created-by p{
        text-align: center;
    }
}
`
