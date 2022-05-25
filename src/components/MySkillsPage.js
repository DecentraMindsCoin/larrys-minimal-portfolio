import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> UX Product Designer
</Title>
<Description>
I love to create & design things that speaks, I try to keep it clean, minimal and simple.
</Description>
<Description>
<strong>I like to Design</strong>
<ul>
    <li>
        Responsive Web App
    </li>
    <li>
        Mobile Ui
    </li>
    <li>
        3D Objects
    </li>
    <li>
        React Components
    </li>
    <li>
        Blockcain UX
    </li>
</ul>
</Description>
<Description>
<strong>Tools</strong>
<ul>
    <li>
       Figma, Adobe, Framer
    </li>
 
    
</ul>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Frontend React Developer
</Title>
<Description>
I value  for which i'm creating, thus i enjoy bringing new ideas to life.
</Description>
<Description>
<strong>Technology</strong>
<p>
Html, Css, Js, React, Next.js, Node, Tailwind, GraphQL, Sanity, NOSQL, Headless CMS
</p>
</Description>
<Description>
<strong>Skills</strong>
<p>
Problem Solver, Fast Learner, Api's
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
