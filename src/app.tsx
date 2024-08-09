
import Countdown from 'react-countdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { Button } from './assets/components/botao'

import logoEvento from './assets/images/logo-saudeExperience.svg'
import logoBmouse from './assets/images/logo-Bmouse.svg'
import robertaSection2 from './assets/images/roberta.svg'
import tomBetaSection2 from './assets/images/tomBeta.svg'

import tomCard from './assets/images/tomCard.svg'
import RobertaCard from './assets/images/robertaCard.svg'
import JaymeCard from './assets/images/jaymeCard.svg'
import sombraCard from './assets/images/sombraCard.svg'

import iconCoracao from './assets/images/iconCoracao.svg'
import Whatsapp from './assets/images/whatsapp.png';
import BackToTop from './assets/components/backToTop';


export default function Home() {

    const countdownDate = new Date('2024-09-20T00:00:00');

    return (
        <>  
            {/* SECTION 1 */}
            <section className='bg-[#463def] '>
                <div className=' max-w-[1536px] mx-auto bg-banner h-[900px] md:h-auto xl:h-[600px] '>
                    <div className='pt-10 md:py-5 md:my-0 px-5 md:px-10 lg:px-16 xl:px-20 h-full'>
                        <div className='w-full h-full md:max-w-[60%] xl:max-w-[650px] flex flex-col md:justify-center gap-7 md:gap-5 xl:gap-10'>
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

                            <p className='font-franieLight'>
                                Prepare-se para um evento inesquecível que une emoção e inovação no universo da saúde!
                            </p>

                            <Button children="Saiba mais" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className='py-14 md:py-20'>
                <div className='max-w-[1536px] mx-auto px-5 md:px-10 lg:px-16 xl:px-0 w-full flex flex-col xl:flex-row gap-5 items-center'>
                    <img 
                        src={robertaSection2}
                        alt="imagem da apresentadora Roberta Almeida" 
                        className='w-1/2 hidden xl:block'
                    />

                    <div className=' xl:w-1/2 space-y-3  xl:pr-20'>
                        <h2 className='font-franieLight leading-tight text-[45px] text-[#11fe92] '>
                            Dia <br /> <span className='font-franieSemiBold text-[#11fe92] '>20 de <br /> Novembro</span>
                        </h2>

                        <p>
                            Organizado pela Bmouse Productions, a maior agência de
                            marketing para profissionais da saúde, o Saúde Empreende
                            Experience é uma oportunidade única para debater o
                            planejamento de carreira, vendas e marketing específicos para
                            a área da saúde.
                        </p>

                        <p>
                            Este ano, o tema central é <strong className='font-franieSemiBold'>"Emoções"</strong> . Vamos explorar como
                            elas influenciam o dia a dia dos profissionais e sua importância
                            no cuidado aos pacientes e nas estratégias de marketing e
                            vendas. Para nos guiar nessa jornada, teremos a presença
                            ilustre de Jayme Monjardim, o maior diretor da história da
                            televisdo brasileira, compartilhando sua visão única sobre a
                            conexão entre emoção e prática médica.
                        </p>

                        <p>
                            O evento terá diversos painéis que abordarão temas essenciais
                            como inovação, gestão de clinicas e novas tecnologias,
                            incluindo o impacto do metaverso na saúde. Além de um dia
                            repleto de aprendizado e trocas de experiências. teremos uma
                            afterparty especial, proporcionando um ambiente perfeito para
                            networking.
                        </p>

                        <Countdown
                            date={countdownDate}
                            renderer={({ days, hours, minutes }) => (
                            <div className='flex md:justify-end gap-3'>
                                <span className="font-franieSemiBold text-4xl lg:text-5xl text-[#0fff94]">{days}D </span>
                                <span className="font-franieSemiBold text-4xl lg:text-5xl text-[#0fff94]">{hours}H </span>
                                <span className="font-franieSemiBold text-4xl lg:text-5xl text-[#0fff94]">{minutes}M </span>
                            </div>
                            )}
                        />
                    </div>
                </div>

                <img 
                    src={tomBetaSection2}
                    alt="imagem dos apresentadores Tom Goncalves e Roberta Almeida" 
                    className='mb-5 w-full lg:hidden'
                />
            </section>

            {/* SECTION 3 */}
            <section className='py-14 md:py-20 flex flex-col items-center gap-5'>
                <iframe
                    className="w-[90%] md:w-[80%] h-[200px] md:h-[515px] xl:h-[620px] rounded-3xl"
                    src="https://www.youtube.com/embed/XB0J3mVluWA?si=JCwsAXOa7HcIC3Zx"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                <Button children="garanta seu ingresso" variant='secondary' />
            </section>

            {/* SECTION 4 */}
            <section className='max-w-[1536px] mx-auto py-14 md:py-20 '>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.2}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2.2  ,
                        },
                        1280: {
                            slidesPerView: 2.2,
                        },
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className='ml-5 !w-full max-w-[650px] flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
                            <div className='bg-[#0fff94] '>
                                <img 
                                    src={tomCard}
                                    alt="imagem do apresentador Tom Gonçalves"
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            <div className='p-5 lg:p-7 w-full lg:max-w-[450px] flex flex-col items-center justify-center gap-5 bg-[#463def] '>
                                <h3 className='font-franieLight text-2xl text-center'>
                                    Tom <br /><span className='font-franieSemiBold'>Gonçalves</span>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima eos aliquid recusandae 
                                    repellat animi, officiis magnam laudantium quibusdam ratione! Ducimus voluptates inventore sint, 
                                    hic error quaerat obcaecati nisi libero!
                                </p>

                                <Button children="Saiba mais" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='ml-5 !w-full max-w-[650px] flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
                            <div className='bg-[#0fff94] '>
                                <img 
                                    src={RobertaCard}
                                    alt="imagem da apresentadora Roberta Almeida"
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            <div className='p-5 lg:p-7 w-full max-w-[450px] flex flex-col items-center justify-center gap-5 bg-[#463def] '>
                                <h3 className='font-franieLight text-2xl text-center'>
                                    Roberta <br /> <span className='font-franieSemiBold'>Almeida</span>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima eos aliquid recusandae 
                                    repellat animi, officiis magnam laudantium quibusdam ratione! Ducimus voluptates inventore sint, 
                                    hic error quaerat obcaecati nisi libero!
                                </p>

                                <Button children="Saiba mais" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='ml-5 !w-full max-w-[650px] flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
                            <div className='bg-[#0fff94] '>
                                <img 
                                    src={JaymeCard}
                                    alt="imagem do apresentador Jayme Monjardim"
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            <div className='p-5 lg:p-7 w-full max-w-[450px] flex flex-col items-center justify-center gap-5 bg-[#463def] '>
                                <h3 className='font-franieLight text-2xl text-center'>
                                    Jayme <br /><span className='font-franieSemiBold'>Monjardim</span>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima eos aliquid recusandae 
                                    repellat animi, officiis magnam laudantium quibusdam ratione! Ducimus voluptates inventore sint, 
                                    hic error quaerat obcaecati nisi libero!
                                </p>

                                <Button children="Saiba mais" />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='ml-5 !w-full max-w-[650px] flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
                            <div className='bg-[#0fff94] '>
                                <img 
                                    src={sombraCard}
                                    alt="Imagem da sombra de uma pessoa, representando futuros apresentadores"
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            <div className='p-5 lg:p-7 w-full max-w-[450px] flex flex-col items-center justify-center gap-5 bg-[#463def] '>
                                <h3 className='font-franieLight text-2xl text-center'>
                                    Mais <br /><span className='font-franieSemiBold'>Convidados</span>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima eos aliquid recusandae 
                                    repellat animi, officiis magnam laudantium quibusdam ratione! Ducimus voluptates inventore sint, 
                                    hic error quaerat obcaecati nisi libero!
                                </p>

                                <Button children="Saiba mais" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* SECTION 5 */}
            <section className='container mx-auto py-14 md:py-20 px-5 md:px-10 lg:px-16 xl:px-20 flex flex-col gap-5 md:flex-row md:justify-between'>
                <div className='w-full lg:w-1/2 space-y-4 md:space-y-6'>
                    <h2 className='text-[40px] capitalize font-franieLight'>
                        adquira <br />
                        <span className='font-franieSemiBold text-[#11fe92] '>seu ingresso</span>
                    </h2>

                    <p className='font-franieLight'>
                        Não perca essa chance única de transformar sua abordagem profissional e alcançar resultados extraordinários!
                    </p>

                    <p className='text-lg font-franieLight'>
                        O <span className='font-franieSemiBold text-[#11fe92] '>Saúde Empreende Experience</span> espera por você!
                    </p>
                    
                    <div className=''>
                        <p className='mb-3 text-lg font-franieLight'>
                            Ficou alguma dúvida?
                        </p>
                        <Button children="saiba mais" variant="secondary" link='whatsapp'  />
                    </div>
                    
                </div>
                
                <div className='w-full lg:max-w-[450px] px-4 py-7 flex flex-col gap-4 items-center rounded-lg bg-[#463def] '>
                    <img 
                        src={iconCoracao} 
                        alt="icon de coração da logo do Saúde Empreende" 
                    />
                    <span className='text-4xl '>
                        R$ 600,00
                    </span>

                    <Button children="garanta seu ingresso" variant="secondary"  />

                    <hr className='w-full border-1 ' />
                    
                    <ul className='w-full space-y-3'>
                        <li className='checked '>
                            Coffe break;
                        </li>
                        <li className='checked '>
                            After party;
                        </li>
                        <li className='checked '>
                            Direito a aquisição de um ingresso extra da after party;
                        </li>
                    </ul>
                </div>
            </section>

            {/* SECTION 6 */}
            <section className='container mx-auto py-14 md:py-20 px-5 md:px-10 lg:px-16 xl:px-20 flex flex-col items-center gap-5'>
                <img 
                    src={logoEvento}
                    alt="logo da empresa Saúde Empreende" 
                    className="w-[200px] "
                />
                <h2 className='text-xl md:text-2xl xl:text-3xl text-center font-franieLight'>
                    Venha viver essa <span className='font-franieSemiBold'>experiência transformadora</span>, cheia de conhecimento, inspiração 
                    e <span className='font-franieSemiBold'>conexões valiosas.</span>
                </h2>
            </section>

            <BackToTop />

            <a 
                href="https://api.whatsapp.com/send?phone=5534999306776&text=Ol%C3%A1,%20tenho%20dúvidas%20do%20sobre%20o%20Saúde%20Empreende%20Experience."
                target='_blank'
                className='fixed right-[27px] bottom-10 z-40'
            >
                <img 
                    src={Whatsapp}
                    alt="icon whatsapp"
                    className='w-14'
                />
            </a>

            {/* FOOTER */}
            <footer className='py-14 md:py-20 flex justify-center rounded-t-xl bg-[#463def] '>
                <a 
                    href="https://bmouseproductions.com"
                    target='_blank'
                >
                    <img 
                        src={logoBmouse}
                        alt="logo da empresa Bmouse Productions" 
                        className=" w-[200px] "
                    />
                </a>
                
            </footer>
        </>
    )
}