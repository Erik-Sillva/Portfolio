// Countup
import CountUp from 'react-countup'

// Intersecttion Observer
import { useInView } from 'react-intersection-observer'

// Motion
import { motion } from 'framer-motion'

// Variant
import { fadeIn } from '../ts/variants'

// CV
import Cv from '../assets/pdf/eriksilva-cv.pdf'


const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    return (
        <section className='section' id="about" ref={ref}>
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                    {/* Img */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 bg-about bg-contain bg-no-repeat bg-top h-[640px] mix-blend-lighten'>
                    </motion.div>

                    {/* Text */}
                    <motion.div 
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1'>
                        <h2 className='h2 text-accent text-center md:text-left'>Sobre Mim</h2>
                        <h3 className='h3 mb-4 text-center md:text-left'>Desenvolvedor Web Front-End</h3>
                        <div className='mb-6'>
                            <p>
                                Me chamo Erik, tenho 19 anos e estou no mundo da programação a pouco mais de 2 anos. Atualmente moro no Brasil e trabalho como Desenvolvedor Web React Freelancer.
                            </p>

                            <h4 className='font-tertiary mt-3'>Possuo conhecimento em:</h4>

                            <div className='flex items-center gap-x-8'>
                            <ul>
                                
                                <li>Tailwind CSS</li>
                                <li>Styled Components</li>
                                <li>React JS</li>
                                <li>TypeScript</li>
                                <li>JavaScript</li>
                            </ul>

                            <ul>
                                <li>Git & Github</li>
                                <li>SCRUM</li>
                                <li>SCSS</li>
                                <li>Bootstrap</li>
                                <li>HTML & CSS</li>
                            </ul>
                            </div>
                        </div>

                        {/* stats */}
                        <div className='flex py-2 gap-x-6 lg:gap-x-10 mb-12'>

                            {/* stats 1 */}
                            <div className='py-5'>
                                <div className='text-[40px] py-2 font-tertiary text-gradient mb-2'>
                                    {
                                        inView ? <CountUp start={0} end={2} duration={3}/> : null
                                    }
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Anos de <br />
                                    Experiência
                                </div>
                            </div>

                            {/* stats 2 */}
                            <div className='py-5'>
                                <div className='text-[40px] py-2 font-tertiary text-gradient mb-2'>
                                    {
                                        inView ? <CountUp start={0} end={10} duration={3}/> : null
                                    }
                                    +
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Projetos <br />
                                    Completos
                                </div>
                            </div>

                            {/* stats 3 */}
                            <div className='py-5'>
                                <div className='text-[40px] py-2 font-tertiary text-gradient mb-2'>
                                    {
                                        inView ? <CountUp start={0} end={5} duration={3}/> : null
                                    }
                                    +
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Certificados <br />
                                    Na Área
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-x-8 items-center'>
                        <a href='#contact' className='btn btn-lg flex items-center'>Entre em contato</a>
                            <a href={Cv} download='cv-eriksilva' className="text-gradient btn-link">Baixar CV</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About