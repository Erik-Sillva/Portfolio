// Motion
import { motion } from 'framer-motion';

// Variants
import { fadeIn } from '../ts/variants';

// Img
import Img1 from '../assets/mock-finans.png';
import Img2 from '../assets/mock-gow.png';
import Img3 from '../assets/mock-portfolio.png';

import Card from './Card';

const Work = () => {
    return (
        <section className='section' id="work">
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        {/* Text */}
                        <div className='h-[320px] flex lg:block justify-center items-center flex-col'>
                            <h2 className='h2 leading-tight text-accent'>Meus últimos <br /> Trabalhos</h2>
                            <p className='max-w-sm mb-8 text-center lg:text-left'>
                                Estes são alguns dos meus últimos projetos/trabalhos, feitos de forma profissional.
                            </p>
                            <a href='https://github.com/Erik-Sillva?tab=repositories' className='btn btn-sm max-w-[200px] flex items-center text-center' target='_blank'>Ver todos projetos</a>
                        </div>

                        <Card img={Img1} type='Development' title='Finans' url='https://erik-sillva.github.io/Finans/'/>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-10'>
                        <Card img={Img2} type='Development' title='Gow Ragnarök' url='https://erik-sillva.github.io/projeto-gow-ragnarok/'/>

                        <div className='mt-[7px]'>
                            <Card img={Img3} type='Development' title='Portfólio' url='https://erik-sillva.github.io/Portfolio/'/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Work