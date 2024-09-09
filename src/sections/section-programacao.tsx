import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import xProgramação from '../assets/images/X-programação.webp';

export default function SectionProgramacao() {
    return (
        <section className='py-14 md:py-20'>
            <div className='container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 md:hidden'>
                <h2 className='text-3xl text-center '>
                    Programação do <span className='franieSemiBold text-[#0fff92] '>Saúde Empreende!</span>
                </h2>

                <p className='text-center my-5'>
                    Confira o que te aguarda nesse evento incrível. 
                </p>
            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={1.1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[]}
                className='md:!hidden !px-5'
            >
                <SwiperSlide>
                    <div className='p-5 w-full h-full flex flex-col bg-[#463def] rounded-2xl '>
                        <h3 className='text-lg font-franieSemiBold'>
                            Primeiro Painel | #01
                        </h3>

                        <div className='space-y-3 my-3'>
                            <span className='font-franieLight'>
                                <strong>Temas:</strong> InfoProdutos e Diversificação de Renda 
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='p-5 w-full h-full flex flex-col bg-[#463def] rounded-2xl '>
                        <h3 className='text-lg font-franieSemiBold'>
                            Palestra: Prof. Dr. Henrique Carivaldo
                        </h3>

                        <div className='space-y-3 my-3'>
                            <span className='font-franieLight'>
                                <strong>Temas:</strong> Bem-estar e saúde mental: reflexões para uma prática interativa e transformadora
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='p-5 w-full h-full flex flex-col bg-[#463def] rounded-2xl '>
                        <h3 className='text-lg font-franieSemiBold'>
                            Palestra: Luis Boesel e Igor Coury
                        </h3>

                        <div className='space-y-3 my-3'>
                            <span className='font-franieLight'>
                                <strong>Temas:</strong> Investimentos
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='p-5 w-full h-full flex flex-col bg-[#463def] rounded-2xl '>
                        <h3 className='text-lg font-franieSemiBold'>
                            Palestra: Dr. Marcio Tannure
                        </h3>

                        <div className='space-y-3 my-3'>
                            <span className='font-franieLight'>
                                <strong>Temas:</strong> Empreendedorismo na Saúde
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='p-5 w-full h-full flex flex-col bg-[#463def] rounded-2xl '>
                        <h3 className='text-lg font-franieSemiBold'>
                            Palestra: Tom Gonçalves
                        </h3>

                        <div className='space-y-3 my-3'>
                            <span className='font-franieLight'>
                                <strong>Temas:</strong> Como Transformar o Investimento de Marketing em Retorno visível
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='p-5 w-full h-full flex flex-col bg-[#0fff92] rounded-2xl '>
                        <h3 className='text-lg text-[#2f3033] font-franieSemiBold'>
                            Palestra: Jaime Monjardim
                        </h3>

                        <div className='space-y-3 my-3'>
                            <span className='text-[#2f3033] font-franieLight'>
                                <strong className='text-[#2f3033]'>Temas:</strong> Como criar histórias emocionantes
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='container mx-auto px-5 md:px-10 lg:px-16 xl:px-20'>
                <div className='hidden md:grid md:grid-cols-2 gap-5'>
                    <div className='flex flex-col justify-center gap-5'>
                        <h2 className='text-4xl text-center '>
                            Programação do <span className='franieSemiBold text-[#0fff92] '>Saúde Empreende!</span>
                        </h2>

                        <p className='text-center'>
                            Confira o que te aguarda nesse evento incrível. 
                        </p>
                    </div>

                    <div className='flex bg-[#463def] rounded-2xl overflow-hidden'>
                        <div className='py-5 pl-5 w-full max-w-[60%] flex flex-col justify-center gap-3'>
                            <h3 className='text-2xl font-franieSemiBold'>
                                Primeiro Painel | #01
                            </h3>

                            <span className='font-franieLight'>
                                <strong>Temas:</strong> InfoProdutos e Diversificação de Renda 
                            </span>
                        </div>

                        <img 
                            src={xProgramação}
                            alt="" 
                        />
                    </div>

                    <div className='flex bg-[#463def] rounded-2xl overflow-hidden'>
                        <div className='py-5 pl-5 w-full max-w-[60%] flex flex-col justify-center gap-3'>
                            <h3 className='text-2xl font-franieSemiBold'>
                                Palestra: Prof. Dr. Henrique Carivaldo
                            </h3>

                            <span className='font-franieLight'>
                                <strong>Temas:</strong> Bem-estar e saúde mental: reflexões para uma prática interativa e transformadora
                            </span>
                        </div>

                        <img 
                            src={xProgramação}
                            alt="" 
                        />
                    </div>

                    <div className='flex bg-[#463def] rounded-2xl overflow-hidden'>
                        <div className='py-5 pl-5 w-full max-w-[60%] flex flex-col justify-center gap-3'>
                            <h3 className='text-2xl font-franieSemiBold'>
                                Palestra: Luis Boesel e Igor Coury
                            </h3>

                            <span className='font-franieLight'>
                                <strong>Temas:</strong> Investimentos
                            </span>
                        </div>

                        <img 
                            src={xProgramação}
                            alt="" 
                        />
                    </div>

                    <div className='flex bg-[#463def] rounded-2xl overflow-hidden'>
                        <div className='py-5 pl-5 w-full max-w-[60%] flex flex-col justify-center gap-3'>
                            <h3 className='text-2xl font-franieSemiBold'>
                                Palestra: Dr. Marcio Tannure
                            </h3>

                            <span className='font-franieLight'>
                                <strong>Temas:</strong> Empreendedorismo na Saúde
                            </span>
                        </div>

                        <img 
                            src={xProgramação}
                            alt="" 
                        />
                    </div>

                    <div className='flex bg-[#463def] rounded-2xl overflow-hidden'>
                        <div className='py-5 pl-5 w-full max-w-[60%] flex flex-col justify-center gap-3'>
                            <h3 className='text-2xl font-franieSemiBold'>
                                Palestra: Tom Gonçalves
                            </h3>

                            <span className='font-franieLight'>
                                <strong>Temas:</strong> Como Transformar o Investimento de Marketing em Retorno visível
                            </span>
                        </div>

                        <img 
                            src={xProgramação}
                            alt="" 
                        />
                    </div>
                </div>

                <div className=' mx-auto w-full max-w-[49%] mt-5 hidden md:flex bg-[#463def] rounded-2xl overflow-hidden'>
                    <div className='py-5 pl-5 w-full max-w-[60%] flex flex-col justify-center gap-3'>
                        <h3 className='text-2xl font-franieSemiBold'>
                            Palestra: Jayme Monjardim
                        </h3>

                        <span className='font-franieLight'>
                            <strong>Temas:</strong> Como criar histórias emocionantes
                        </span>
                    </div>

                    <img 
                        src={xProgramação}
                        alt="" 
                    />
                </div>

                <div className='mx-auto mt-10 w-fit flex'>
                    <a 
                        href='/experience/Cronograma Saúde Empreende Experience.pdf' 
                        download='/experience/Cronograma Saúde Empreende Experience.pdf'
                        target='_blank'
                        rel="noopener noreferrer"
                        className='px-3 md:px-5 pt-3 pb-2 rounded-2xl text-lg text-center uppercase transition-all bg-[#0fff94] text-[#2e2f32] hover:bg-[#2e2f32] hover:text-[#0fff94] border-2 border-[#0fff94]'
                    >
                        programação completa
                    </a>
                </div>
            </div>

        </section>
    )
}