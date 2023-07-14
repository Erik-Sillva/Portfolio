// Images
import Image from '../assets/avatar.svg'

// CV
import Cv from '../assets/pdf/eriksilva-cv.pdf'

// Icons
import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa'

// Type Animations
import {TypeAnimation} from 'react-type-animation'

// Motion
import {motion} from 'framer-motion'

// Variants
import {fadeIn} from '../ts/variants'

const Banner = () => {
    return (
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id="home">
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    {/* text */}
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once: false, amount: 0.7}}
                            className='text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-2'>
                            ERIK <span>SILVA</span>
                        </motion.h1>

                        <motion.div 
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once: false, amount: 0.7}}
                            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
                            <span className='text-white mr-2'>Web</span>
                            <TypeAnimation sequence={[
                                'Developer',
                                2000,
                                'Designer',
                                2000
                            ]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                            />
                        </motion.div>

                        <motion.p 
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once: false, amount: 0.7}}
                            className='mb-8 max-w-lg mx-auto lg:mx-0'>
                            Desenvolvedor Web Front-End React com 2 anos de experiência e diversos projetos completos com as melhores e mais usadas tecnologias do mercado!
                        </motion.p>

                        <motion.div 
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once: false, amount: 0.7}}
                            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                            <a href='#contact' className='btn btn-lg flex items-center'>Contrate-me</a>
                            <a href={Cv} download='cv-eriksilva' className='text-gradient btn-link'>Baixar CV</a>
                        </motion.div>

                        {/* Sociais */}
                        <motion.div 
                            variants={fadeIn('up', 0.7)}
                            initial='hidden'
                            whileInView='show'
                            viewport={{once: false, amount: 0.7}}
                            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href="https://github.com/Erik-Sillva" className='transition-all ease-in hover:mt-[-3px]' target='_blank'>
                                <FaGithub/>
                            </a>

                            <a href="https://www.linkedin.com/in/eriksilva-dev/" className='transition-all ease-in hover:mt-[-3px]' target='_blank'>
                                <FaLinkedin/>
                            </a>

                            <a href="https://wa.me/5587999929262?text=Ol%C3%A1%2C%20Erik%21" className='transition-all ease-in hover:mt-[-3px]' target='_blank'>
                                <FaWhatsapp/>
                            </a>
                        </motion.div>
                    </div>

                    {/* image */}
                    <motion.div 
                        variants={fadeIn('down', 0.5)}
                        initial='hidden'
                        whileInView='show'
                        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                        <img src={Image} alt="cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Banner