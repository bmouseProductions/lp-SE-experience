import Countdown from 'react-countdown';

import { Button } from '../assets/components/botao'

import logoEvento from '../assets/images/logo-saudeExperience.svg'
import logoBmouse from '../assets/images/logo-Bmouse.svg'

interface PropsCountdownDate {
    countdownDate: Date;
}

export default function SectionBanner({ countdownDate }: PropsCountdownDate) {

    return (
        <section className='bg-[#463def] '>
            <div className=' max-w-[1536px] mx-auto h-[1020px] md:h-auto xl:h-[600px] bg-banner'>
                <div className='pt-10 md:my-0 px-5 md:px-10 lg:px-16 xl:px-20 h-full'>
                    <div 
                        className='w-full h-full md:max-w-[60%] xl:max-w-[650px] flex flex-col md:justify-center gap-7 md:gap-5 xl:gap-10'
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <div className="w-full flex justify-between">
                            <img 
                                src={logoEvento}
                                alt="logo da empresa Saúde Empreende" 
                                className="w-[150px] "
                            />

                            <img 
                                src={logoBmouse}
                                alt="logo da empresa Bmouse Productions" 
                                className=" w-[100px] "
                            />
                        </div>

                        <h1 className='font-franieLight text-[35px] xl:text-[55px] leading-tight '>
                            Vem aí o <br className='hidden md:block'/>
                            <span className=' font-franieSemiBold'>Saúde Empreende Experience!</span>
                        </h1>

                        <span className='font-franieLight'>
                            Você é um profissional da área da saúde? Participe do maior evento de empreendedorismo e transforme sua carreira!
                        </span>
                        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5'>
                            <Button children="comprar ingresso" />

                            <Countdown
                                date={countdownDate}
                                renderer={({ days, hours, minutes }) => (
                                <div className='flex justify-start lg:justify-end gap-3'>
                                    <div className='p-3 flex flex-col justify-center bg-[#0fff94] rounded-xl'>
                                        <span className="font-franieSemiBold text-4xl lg:text-5xl text-center text-[#2e2f32]">{days}</span>
                                        <span className='text-center text-[#2e2f32]'>Dias</span>
                                    </div>
                                    
                                    <div className='p-3 flex flex-col justify-center bg-[#0fff94] rounded-xl'>
                                        <span className="font-franieSemiBold text-4xl lg:text-5xl text-center text-[#2e2f32]">{hours}</span>
                                        <span className='text-center text-[#2e2f32]'>Horas</span>
                                    </div>
                                    <div className='p-3 flex flex-col justify-center bg-[#0fff94] rounded-xl'>
                                        <span className="font-franieSemiBold text-4xl lg:text-5xl text-center text-[#2e2f32]">{minutes}</span>
                                        <span className='text-center text-[#2e2f32]'>Minutos</span>
                                    </div>
                                </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}