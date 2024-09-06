
import Countdown from 'react-countdown';

import robertaSection2 from '../assets/images/roberta.svg'
import tomBetaSection2 from '../assets/images/tomBeta.svg'

interface PropsCountdownDate {
    countdownDate: Date;
}

export default function SectionTimer({ countdownDate }: PropsCountdownDate) {
    return (
        <section className='py-14 md:py-20'>
            <div className='max-w-[1536px] mx-auto px-5 md:px-10 lg:px-16 xl:px-0 w-full flex flex-col xl:flex-row gap-5 items-center'>
                <img 
                    src={robertaSection2}
                    alt="imagem da apresentadora Roberta Almeida" 
                    className='w-1/2 hidden xl:block'
                />

                <div 
                    className=' xl:w-1/2 space-y-3  xl:pr-20'
                    data-aos="fade-up-left"
                    data-aos-duration="1500"
                >
                    <h2 className='font-franieLight leading-tight text-[45px] text-[#11fe92] '>
                        Dia <br /> <span className='font-franieSemiBold text-[#11fe92] '>20 de <br /> setembro</span>
                    </h2>

                    <p>
                        Organizado pela BMouse Productions, a maior agência de marketing para profissionais 
                        da saúde, o Saúde Empreende Experience é uma oportunidade única para debater o 
                        planejamento de carreira, estratégia de vendas e a eficiência de um bom marketing.
                    </p>

                    <p>
                        Este ano, o tema central é "Emoções" . Vamos explorar como elas influenciam o dia a 
                        dia dos profissionais e sua importância no cuidado aos pacientes e nas estratégias de 
                        marketing e vendas. Para nos guiar nessa jornada, teremos a presença ilustre de Jayme Monjardim, 
                        o maior diretor da história da televisão brasileira, compartilhando sua visão única 
                        sobre a conexão entre emoção e prática médica.
                    </p>

                    <p>
                        O evento terá diversos painéis que abordarão temas essenciais como inovação, gestão 
                        de clínicas e novas tecnologias, incluindo o impacto do metaverso na saúde. Além de um 
                        dia repleto de aprendizado e trocas de experiências, teremos uma after party especial, 
                        proporcionando um ambiente perfeito para networking.
                    </p>

                    <Countdown
                        date={countdownDate}
                        renderer={({ days, hours, minutes }) => (
                        <div className='flex justify-center md:justify-end gap-3'>
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

            <img 
                src={tomBetaSection2}
                alt="imagem dos apresentadores Tom Goncalves e Roberta Almeida" 
                className='mb-5 w-full lg:hidden'
            />
        </section>
    )
}