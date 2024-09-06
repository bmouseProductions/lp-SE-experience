import { Button } from '../assets/components/botao'

import nota from '../assets/images/nota.webp'
import moeda from '../assets/images/moeda.webp'

export default function SectionDesconto() {
    return (
        <section className='container mx-auto py-14 md:py-20 px-5 md:px-10 lg:px-16 xl:px-20 overflow-hidden'>
            <div 
                className='relative w-full md:w-[90%] mx-auto px-5 pt-7  md:py-10 xl:py-14 md:px-10 bg-[#463def] rounded'
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className='mx-auto  w-full max-w-3xl flex flex-col items-center gap-5'>
                    <h2 className='text-4xl md:text-5xl text-center text-white font-franieSemiBold'>
                        <span className='text-[#0fff94]'>Ganhe</span> <br />
                        <span className='font-franieSemiBold'>R$ 50 de desconto</span>
                    </h2>
                    <p className='text-center'>
                        Comprando seu ingresso presencialmente, pagamento à vista no dinheiro.
                        Para comprar, entre em contato pelo <strong>botão abaixo.</strong>
                    </p>

                    <Button variant='secondary' link='whatsapp'>
                        Comprar ingresso
                    </Button>

                    <img 
                        src={nota}
                        alt="icone de dinheiro"
                        className='-mb-10 md:hidden'
                    />
                </div>

                <img 
                    src={nota}
                    alt="icone de dinheiro"
                    className='hidden md:block absolute left-[-100px] top-[100px] w-36 xl:w-60 xl:left-[-120px] '
                />
                <img 
                    src={moeda}
                    alt="icone de dinheiro"
                    className='hidden md:block absolute right-[-100px] top-[100px] w-32 xl:w-60 xl:right-[-120px] '
                />
            </div>
        </section>
    )
}