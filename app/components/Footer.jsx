import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Footer = ({isDarkMode}) => {
    const [isSnowing, setIsSnowing] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleSnow = () => {
        setIsSnowing(!isSnowing);
    };

    useEffect(() => {
        if (isSnowing) {
            // Create snow effect
            const snowContainer = document.createElement('div');
            snowContainer.id = 'snow-container';
            snowContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 9999;
                overflow: hidden;
            `;
            document.body.appendChild(snowContainer);

            const createSnowflake = () => {
                const snowflake = document.createElement('div');
                snowflake.innerHTML = '❄';
                snowflake.style.cssText = `
                    position: absolute;
                    color: white;
                    font-size: ${Math.random() * 10 + 10}px;
                    left: ${Math.random() * 100}%;
                    top: -20px;
                    opacity: ${Math.random() * 0.8 + 0.2};
                    animation: fall ${Math.random() * 3 + 2}s linear infinite;
                    text-shadow: 0 0 5px rgba(255,255,255,0.8);
                `;
                snowContainer.appendChild(snowflake);

                setTimeout(() => {
                    snowflake.remove();
                }, 5000);
            };

            // Add CSS animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(style);

            const snowInterval = setInterval(createSnowflake, 200);

            return () => {
                clearInterval(snowInterval);
                if (document.getElementById('snow-container')) {
                    document.getElementById('snow-container').remove();
                }
                if (document.head.querySelector('style')) {
                    document.head.querySelector('style').remove();
                }
            };
        } else {
            // Remove snow effect
            const snowContainer = document.getElementById('snow-container');
            if (snowContainer) {
                snowContainer.remove();
            }
            const style = document.head.querySelector('style');
            if (style && style.textContent.includes('@keyframes fall')) {
                style.remove();
            }
        }
    }, [isSnowing]);

    return (
        <footer className='bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 '>
            <div className='max-w-6xl mx-auto px-4 py-2'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {/* Brand Section */}
                    <div className='text-center md:text-left'>
                        <Image 
                            src={isDarkMode ? assets.logo_dark : assets.logo} 
                            alt="Logo" 
                            className='w-40 mx-auto md:mx-0  hover:opacity-80 transition-opacity duration-300 cursor-pointer'
                            onClick={scrollToTop}
                        />
                        <p className='text-sm font-medium mb-2 dark:text-white/90'>Rishabh Dhawad</p>
                        <p className='text-xs text-gray-500 dark:text-gray-400 max-w-xs mx-auto md:mx-0'>
                            Fullstack Developer passionate about creating amazing web experiences.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className='text-center'>
                        <h3 className='text-lg font-semibold mb-6 dark:text-white'>Get In Touch</h3>
                        <div className='flex items-center justify-center gap-2 mb-3 hover:text-gray-900 dark:hover:text-white transition-colors duration-300'>
                            <Image 
                                src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
                                alt="Mail Icon" 
                                className='w-5 h-5'
                            />
                            <a 
                                href="mailto:rishabhdhawad29@gmail.com" 
                                className='hover:underline dark:text-white/90'
                            >
                                rishabhdhawad29@gmail.com
                            </a> 
                        </div>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>
                            Available for freelance projects
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className='text-center md:text-right'>
                        <h3 className='text-lg font-semibold mb-4 dark:text-white'>Quick Links</h3>
                        <nav className='space-y-2'>
                            <a 
                                href="#about" 
                                className='block text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
                            >
                                About
                            </a>
                            <a 
                                href="#services" 
                                className='block text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
                            >
                                Services
                            </a>
                            <a 
                                href="#work" 
                                className='block text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
                            >
                                Portfolio
                            </a>
                            <a 
                                href="#contact" 
                                className='block text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                        <p className='text-sm text-gray-500 dark:text-gray-400 text-center md:text-left'>
                            &copy; 2025 Rishabh Dhawad. All rights reserved.
                        </p>
                        
                        <div className='flex items-center gap-6'>
                            <a 
                                target='_blank' 
                                href="https://github.com/RishabhDhawad" 
                                className='flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-105'
                                rel="noopener noreferrer"
                            >
                                <Image 
                                    src={isDarkMode ? assets.github_icon_dark || assets.mail_icon_dark : assets.github_icon || assets.mail_icon} 
                                    alt="Github" 
                                    className='w-5 h-5'
                                />
                                Github
                            </a>
                            <a 
                                target='_blank' 
                                href="https://www.linkedin.com/in/rishabhdhawad/" 
                                className='flex items-center gap-2 text-sm hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-105'
                                rel="noopener noreferrer"
                            >
                                <Image 
                                    src={isDarkMode ? assets.linkedin_icon_dark || assets.mail_icon_dark : assets.linkedin_icon || assets.mail_icon} 
                                    alt="LinkedIn" 
                                    className='w-5 h-5'
                                />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Snow Button */}
                <button
                    onClick={toggleSnow}
                    className={`fixed bottom-8 left-8 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center text-2xl ${
                        isSnowing 
                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                    aria-label='Toggle snow'
                    title='Let it snow'
                >
                    ❄
                </button>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className='fixed bottom-8 right-8 bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50'
                    aria-label='Back to top'
                >
                    <svg 
                        className='w-5 h-5' 
                        fill='none' 
                        stroke='currentColor' 
                        viewBox='0 0 24 24'
                    >
                        <path 
                            strokeLinecap='round' 
                            strokeLinejoin='round' 
                            strokeWidth={2} 
                            d='M5 10l7-7m0 0l7 7m-7-7v18' 
                        />
                    </svg>
                </button>
            </div>
        </footer>
    )
}

export default Footer