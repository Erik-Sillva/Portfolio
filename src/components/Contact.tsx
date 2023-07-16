// React
import { useState } from 'react'

// Motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from '../ts/variants'

const Contact = () => {
    const [name, setName] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const regex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

    const handleSubmit = () => {

        if (name === null || email === null || message === null) {
            alert('Ops... preencha todos os campos');
            return;
        } else {
            if (regex.test(email)) {
                setName('')
                setEmail('')
                setMessage('')
            } else {
                alert('Ops... verifique seu email');
                return;
            }
        }
    }

    return (
        <section className='section mb-14' id="contact">
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                    {/* Text */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex justify-star items-center'>
                        <div className='flex mx-auto lg:mx-0 lg:block justify-center items-center flex-col'>
                            <h4 className='text-xl text-center md:text-left uppercase text-accent mb-2 tracking-wide'>Entre em contato</h4>
                            <h2 className='text-[45px] text-center md:text-left lg:text-[90px] leading-none mb-12'>Vamos trabalhar juntos!</h2>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form 
                        action="https://formsubmit.co/eriksilva.developer@gmail.com" 
                        method="POST"
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>

                        <input type="hidden" name="_next" value="erikdev.site/thankyou"></input>
                        <input type="hidden" name="_captcha" value="false"/>

                        <div className='container-info w-full'>
                            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" id='name' name='name' autoComplete='off' type="text" required onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="name">Nome</label>
                        </div>
                        

                        <div className='container-info w-full'>
                            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" id='email' name='email' autoComplete='off' type="email" required onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        

                        <div className='container-info w-full'>
                            <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' id='msg' name='menssage' autoComplete='off' required onChange={(e) => setMessage(e.target.value)}></textarea>
                            <label htmlFor="msg">Mensagem</label>
                        </div>

                        <button className='btn btn-lg mx-auto mt-[2em]' onClick={handleSubmit}>Enviar Mensagem</button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact