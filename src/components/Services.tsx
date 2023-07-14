// Motion
import { motion } from 'framer-motion';

// Variants
import { fadeIn } from '../ts/variants'

// Services Data
const services = [
    {
        name: 'Desenvolvedor',
        description: 'Minha especialização é o desenvolvimento web, onde comecei e estou até hoje. Possuo diversos conhecimentos na área, como criação de Landing Pages, SPAs, Portfólios e afins.',
        link: 'Learn More'
    },
]

const Services = () => {
    return (
        <section className='section' id='services'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row lg:h-[650px]'>
                    {/* Text e image*/}
                    <motion.div 
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex md:block justify-center items-center flex-col lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
                        <h2 className='h2 text-accent mb-6'>Serviços</h2>
                        <h3 className='h3 max-w-[455px] text-center md:text-left mb-10'>Conheça um pouco mais do meu trabalho</h3>
                        <a href='#work' className="btn btn-sm max-w-[200px] flex items-center text-center">Veja Meu Trabalho</a>
                    </motion.div>
                    
                    {/* Services */}
                    <motion.div 
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className=' flex-1'>
                        {/* Services List */}
                        <div>
                            {services.map((services, index) => {
                                // destructure service
                                const {name, description} = services; 
                                return (
                                    <div className='border-b border-white/20 pb-5 mb-[38px] flex' key={index}>
                                        <div className='max-w-[476px]'>
                                            <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                                            <p className='font-secondary leading-tight'>{description}</p>
                                        </div>

                                        {/* <div className='flex flex-col flex-1 items-end'>
                                            <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                                                <BsArrowUpRight/>
                                            </a>    
                                        </div> */}
                                    </div>    
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services