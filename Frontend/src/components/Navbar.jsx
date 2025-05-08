import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiX, FiMenu } from 'react-icons/fi'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeNavLink, setActiveNavLink] = useState('HOME')
    const [isScroll, setIsScroll] = useState(false)
    const menuItems = ['HOME', 'ABOUT', 'SKILLS', 'PROJECT', 'EDUCATION', 'CONTACT']

    const handleChangeNavLink = (item) => {
        setActiveNavLink(item);
        setIsMenuOpen(false)

        const section = document.getElementById(item.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // -----------Check scroll function
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id.toUpperCase();
                        if (menuItems.includes(id)) {
                            setActiveNavLink(id);
                        }
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <div className={`fixed w-full flex justify-between items-center z-50  ${isScroll === true ? 'bg-black' : 'bg-transparent'} transition duration-300 h-[64px] px-2 lg:px-[8vw] text-white text-base`}>
            {/* -------------Logo------------- */}
            <Link to={'/'} className=' text-2xl font-medium'>
                <span>&lt;</span>
                <span className='pacifico'> a1Sartaj </span>
                <span>/&gt;</span>
            </Link>

            <ul className='hidden md:flex gap-4'>
                {
                    menuItems.map((item) => (
                        <li onClick={() => handleChangeNavLink(item)} className={`${activeNavLink === item ? 'text-purple-500' : ''} cursor-pointer hover:text-purple-500 font-medium`} key={item}>
                            <button>{item}</button>
                        </li>
                    ))
                }
            </ul>

            {/* -----------Hire me Button------------ */}
            <a href='mailto:sartaj9806@gmail.com' className='hidden md:block bg-white cursor-pointer hover:bg-black hover:text-white text-black text-base font-medium border border-gray-600 rounded-full px-4 py-2'>Hire Me</a>

            <div className='md:hidden'>
                {/* -------------Menu Icon--------------- */}
                {
                    isMenuOpen ? (
                        <FiX className='text-3xl' onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <FiMenu className='text-3xl' onClick={() => setIsMenuOpen(true)} />
                    )
                }
            </div>

            {/* ----------Mobile Menu Link------------- */}
            {
                isMenuOpen && (
                    <div className='absolute top-0 transition duration-300 right-0 left-0 mt-[64px] bg-black'>
                        <ul className='flex flex-col justify-center items-center gap-4'>
                            {
                                menuItems.map((item) => (
                                    <li onClick={() => handleChangeNavLink(item)} className={`${activeNavLink === item ? 'text-purple-500' : ''} cursor-pointer hover:text-purple-500 font-medium`} key={item}>
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar
