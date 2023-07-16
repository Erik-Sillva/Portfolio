import Img from '../assets/mailsent.svg'

const Thankyou = () => {
    return (
        <div className='h-[100vh] flex flex-col items-center'>
            <div className='w-full h-[300px] flex'>
                <img src={Img} className='block w-full' alt="email-sent" />
            </div>

            <div className="p-5 text-center">
                <h2 className='h2 text-gradient text-center'>E-mail Enviado</h2>
                <p className='text-[20px]'>Recebemos seu e-mail. Agora, basta aguardar e ficar atento, pois iremos responder o mais rápido possível!</p>
            </div>
        </div>
    )
}

export default Thankyou