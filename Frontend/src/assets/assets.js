import heroImage from './HeroSartaj.png'
import resume from './Sartaj Alam Resume.pdf'
import htmlLogo from './html.png'
import cssLogo from './css-3.png'
import jsLogo from './js.png'
import reactLogo from './react.png'
import tailwindLogo from './Tailwind CSS.png'
import nodeJs from './Node.js.png'
import express from './Express.png'
import mongoDB from './MongoDB.png'
import C from './C.png'
import CPP from './CPP.png'
import figma from './Figma.png'
import git from './Git.png'
import gitHub from './GitHub.png'
import postman from './Postman.png'
import vsCode from './VSCode.png'
import vite from './Vite.js.png'
import shoeShopHero from './home page of website.png'



export const assets = {
    heroImage, resume,
    htmlLogo, cssLogo, jsLogo, reactLogo, tailwindLogo, vite,
    nodeJs, express, mongoDB,
    C, CPP,
    figma, git, gitHub, postman, vsCode,

}


export const projects = [
    {
        _id: 0,
        title: 'Online Shoe Shop',
        description: 'This is my college project for Bachelor of Computer Application and not for actual products selling. In this project I have built a responsive fronted page for user from user can purchase shoes and other side we have admin section from where admin can manage everything in this E-Commerce platform this. I have used with MERN Stack.',
        image: shoeShopHero,
        tags: ['HTML', 'CSS', 'JavaScript', 'MERN'],
        gitHubLink: 'https://github.com/sartaj9806/shoeshop',
        liveLink: 'https://github.com/sartaj9806/shoeshop'
    },
    {
        _id: 1,
        title: 'Daily EMI Record',
        description: 'This website is for my client to store Daily based EMI and store all transation 1 to 120 days. I have used with MERN Stack.',
        image: shoeShopHero,
        tags: ['HTML', 'CSS', 'JavaScript', 'MERN'],
        gitHubLink: 'https://github.com/sartaj9806/financer',
        liveLink: 'https://github.com/sartaj9806/financer'
    }
]