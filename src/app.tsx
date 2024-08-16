import { useState } from 'react';
import Countdown from 'react-countdown';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { Button } from './assets/components/botao'

import logoEvento from './assets/images/logo-saudeExperience.svg'
import logoBmouse from './assets/images/logo-Bmouse.svg'
import robertaSection2 from './assets/images/roberta.svg'
import tomBetaSection2 from './assets/images/tomBeta.svg'

import anaCard from './assets/images/palestrantes/anaCard.svg'
import clenioCard from './assets/images/palestrantes/clenioCard.svg'
import elisangelaCard from './assets/images/palestrantes/elisangelaCard.svg'
import henriqueCard from './assets/images/palestrantes/henriqueCard.svg'
import marcioCard from './assets/images/palestrantes/marcioCard.svg'
import tomCard from './assets/images/palestrantes/tomCard.svg'
import jaymeCard from './assets/images/palestrantes/jaymeCard.svg'

import nota from './assets/images/nota.webp'
import moeda from './assets/images/moeda.webp'

import xProgramação from './assets/images/X-programação.webp'

import unipam from './assets/images/unipam.webp'
import olhar from './assets/images/olhar.webp'
import xp from './assets/images/xp.webp'
import jp from './assets/images/JP.webp'

import iconCoracao from './assets/images/iconCoracao.svg'
import Whatsapp from './assets/images/whatsapp.png';
import BackToTop from './assets/components/backToTop';
import  Modal  from './assets/components/modal';
import Faq from './assets/components/faq';
import Faq2 from './assets/components/faq2';

interface Palestrante {
    img: string;
    name: string;
    sobrenome: string;
    resume: string;
    about: string;
}


export default function Home() {

    const countdownDate = new Date('2024-09-20T00:00:00');

    const infoPalestrantes = [
        {
            name: 'Jayme',
            sobrenome: 'Monjardim',
            img: jaymeCard,
            resume: `Renomado diretor da televisão brasileira, Jayme Monjardim é conhecido por sucessos como "O Clone" e 
            "Terra Nostra." Ele abordará o impacto das emoções na saúde e no planejamento de carreira, mostrando como 
            utilizar o poder emocional para construir conexões profundas e alcançar resultados excepcionais.`,
            about: `Jayme Monjardim é um dos mais renomados diretores da televisão brasileira, com uma carreira que atravessa 
            gerações e que deixou uma marca profunda na cultura do país. À frente de sucessos como "O Clone," "Terra Nostra" e a 
            "A Casa das Sete Mulheres," Jayme emocionou milhões de brasileiros, dirigindo histórias inesquecíveis que tocaram o 
            coração do público.  <br/> <br/>
            No Saúde Empreende Experience, ele trará essa visão única sobre o impacto das emoções no universo da saúde e em 
            todas as carreiras, mostrando como podemos usar esse poder emocional para transformar abordagens, construir conexões 
            mais profundas e alcançar resultados extraordinários.`
        },
        {
            name: 'Dr. Márcio',
            sobrenome: 'Tannure',
            img: marcioCard,
            resume: `Dr. Márcio Tannure é especialista em Ortopedia e Traumatologia com pós-graduação em Medicina Ortomolecular. 
            Referência na medicina esportiva, atuando como chefe do Departamento Médico do Flamengo e médico oficial do UFC no 
            Brasil, ele compartilhará técnicas e insights sobre atendimento a atletas e superação de desafios.`,
            about: `Dr. Márcio Tannure formou em Medicina pela Faculdade Gama Filho, no Rio de Janeiro, em 2004. Por conta da 
            sua paixão pelo esporte, decidiu especializar-se em Ortopedia e Traumatologia, complementando sua formação com uma 
            pós-graduação em Medicina Ortomolecular. <br/> <br/>
            Hoje, Dr. Tannure é uma referência na medicina esportiva, atuando como chefe 
            do Departamento Médico do Flamengo e como médico oficial do UFC no Brasil. Ele é Membro Titular da Sociedade Brasileira 
            de Traumatologia e Ortopedia (SBOT) e da Sociedade Brasileira de Artroscopia e Trauma do Esporte (SBRATE), consolidando 
            sua posição como um dos grandes nomes da área. <br/> <br/>
            Em sua palestra no Saúde Empreende Experience, Dr. Márcio Tannure compartilhará sua rica experiência na medicina do 
            esporte, trazendo técnicas valiosas e insights sobre o atendimento a atletas de alta performance. Sua palestra também 
            será uma lição sobre superação de desafios e dedicação ao que se ama, mostrando como a paixão pelo esporte o levou ao 
            topo de sua carreira.`
        },
        {
            name: 'Prof. Dr. Henrique',
            sobrenome: 'Carivaldo',
            img: henriqueCard,
            resume: `Reitor do Centro Universitário de Patos de Minas - UNIPAM, Henrique Carivaldo tem vasta experiência 
            acadêmica e uma visão estratégica do mundo empreendedor. Com graduação em Filosofia e Letras, Mestrado, 
            Doutorado e Pós-doutorado, ele enriquecerá o evento com dicas e orientações para transformar carreiras.`,
            about: `Henrique Carivaldo possui uma trajetória sólida como docente, desde 1999, ele tem contribuído para a 
            formação de inúmeros profissionais em cursos de graduação e pós-graduação. Licenciado em Filosofia e Letras, com 
            Mestrado em Magistério Superior, Doutorado em Educação e Pós-doutorado em Psicologia, Henrique combina uma vasta 
            experiência acadêmica com uma visão estratégica do mundo empreendedor. <br/> <br/>
            Hoje, Henrique é reitor do Centro Universitário de Patos de Minas - UNIPAM e sua participação no evento promete 
            enriquecer as discussões com insights valiosos, trazendo grandes dicas e orientações que podem transformar a forma 
            como os profissionais enxergam e conduzem suas carreiras.`
        },
        {
            name: 'Clênio',
            sobrenome: 'Clênio',
            img: clenioCard,
            resume: `Clênio Gonçalves é um líder no setor de reciclagem animal no Brasil, atuando no Grupo Patense desde jovem. 
            Fundador da ABRA, ele exemplifica inovação e perseverança. Sua palestra abordará liderança, inovação e sucesso, 
            oferecendo insights profundos para empreendedores em busca de ampliar suas perspectivas de negócios.`,
            about: `Clênio Gonçalves traz uma visão empreendedora gigantesca, moldada por sua trajetória à frente de uma das 
            maiores empresas de reciclagem animal do Brasil, o Grupo Patense. <br/> <br/>
            Iniciando sua jornada empresarial ainda jovem, ao lado de seu pai, Clênio se tornou líder da Patense aos 16 anos. 
            Desde então, tem sido um exemplo de perseverança e inovação, princípios que também guiaram sua idealização da ABRA 
            (Associação Brasileira de Reciclagem Animal). Sua experiência vai ampliar a visão empreendedora de todos os 
            participantes, oferecendo insights valiosos sobre liderança, inovação e sucesso no mundo dos negócios.`
        },
        {
            name: 'Dra. Elisângela',
            sobrenome: 'Menezes',
            img: elisangelaCard,
            resume: `Pediatra, alergista e imunologista, Dra. Elisângela é referência na área de saúde, conhecida por seu cuidado 
            humanizado e expertise técnica. Ela integrou o marketing emocional em sua prática, e no Saúde Empreende Experience 
            compartilhará aspectos técnicos e experiências pessoais que moldaram sua trajetória de sucesso.`,
            about: `Dra. Elisângela Menezes, pediatra, alergista e imunologista, é uma das referências na área de saúde em nossa 
            região, reconhecida por sua expertise técnica e pelo cuidado humanizado com seus pacientes. Ao longo de sua carreira, 
            ela não apenas se destacou como uma profissional exemplar, mas também expandiu significativamente seu nome. <br/> <br/>
            A Dra. Elisângela soube integrar o marketing em sua prática, utilizando as emoções como ferramenta poderosa 
            para alcançar e impactar ainda mais pessoas.No Saúde Empreende Experience, Dra. Elisângela trará uma visão 
            enriquecedora, abordando tanto aspectos técnicos quanto experiências pessoais que moldaram sua trajetória de sucesso.`
        },
        {
            name: 'Anna ',
            sobrenome: 'Cláudia',
            img: anaCard,
            resume: `Graduada em Educação Física pela UNITRI, Anna Cláudia se especializou em Musculação, Personal Trainer, 
            Treinamento Esportivo, Fisiologia do Exercício, Medicina do Esporte e mais. Possui mais de 150 cursos de extensão, 
            fundou o Studio Fit e o Instituto Pró-Vida. Como palestrante, compartilhará sua experiência e visão estratégica, 
            oferecendo dicas valiosas para expansão no mercado da saúde.`,
            about: `Anna Claudia é graduada em Educação Física pela UNITRI e se especializou em áreas como Musculação e Personal 
            Trainer, Treinamento Esportivo, Fisiologia do Exercício, Medicina do Esporte e Atividade Física, Biomecânica e Prevenção 
            de Lesões, além de acumular mais de 150 cursos de extensão. <br/> <br/>
            Como empreendedora, Anna fundou o Studio Fit, uma academia de referência, e criou o projeto inovador do Instituto 
            Pró-Vida. Com uma vasta experiência como palestrante em diversas cidades, ela compartilhará seu conhecimento e sua 
            visão estratégica, oferecendo dicas valiosas para quem deseja expandir sua atuação no mercado da saúde.`
        },
        {
            name: 'Tom',
            sobrenome: 'Gonçalves',
            img: tomCard,
            resume: `Tom Gonçalves, sócio-fundador da BMouse Productions, traz uma carreira inovadora com experiência 
            artística e estratégica. Com uma visão criativa no marketing, Tom se destacará no evento com uma palestra inspiradora, 
            oferecendo insights valiosos sobre estratégias e novas abordagens no mercado.`,
            about: `Tom Gonçalves é um empreendedor visionário e sócio-fundador da BMouse Productions. Com uma carreira 
            repleta de inovações, Tom traz em sua bagagem uma experiência diversa, que inclui sua passagem pela área artística 
            como músico de uma banda. <br/> <br/>
            Sempre impulsionado pela criatividade, ele aplica uma visão estratégica ao marketing, 
            buscando constantemente novos conhecimentos e desafios. Tom Gonçalves é a mente por trás de estratégias inovadoras 
            que elevam o marketing a novos patamares, e será um dos palestrantes do Saúde Empreende Experience. Prepare-se para 
            uma palestra inspiradora e cheia de insights valiosos.`
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPalestrante, setSelectedPalestrante] = useState<Palestrante | null>(null);
  
    const openModal = (palestrante: Palestrante) => {
        setSelectedPalestrante(palestrante);
        setIsModalOpen(true);
    };
  
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPalestrante(null);
    };


    return (
        <>  
            {/* SECTION BANNER */}
            <section className='bg-[#463def] '>
                <div className=' max-w-[1536px] mx-auto h-[1020px] md:h-auto xl:h-[600px] bg-banner'>
                    <div className='pt-10 md:my-0 px-5 md:px-10 lg:px-16 xl:px-20 h-full'>
                        <div 
                            className='w-full h-full md:max-w-[60%] xl:max-w-[650px] flex flex-col md:justify-center gap-7 md:gap-5 xl:gap-10'
                            data-aos="fade-up"
                            data-aos-duration="3000"
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


            {/* SECTION VIDEO */}
            <section className='py-14 md:py-20 flex flex-col items-center gap-5'>
                <iframe
                    className="w-[90%] md:w-[80%] h-[200px] md:h-[515px] xl:h-[620px] rounded-3xl"
                    src="https://www.youtube.com/embed/XB0J3mVluWA?si=JCwsAXOa7HcIC3Zx"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    data-aos="flip-left"
                    data-aos-duration="3000"
                />
                <Button children="garanta seu ingresso" variant='secondary' />
            </section>

            
            {/* SECTION PROGRAMAÇÃO */}
            <section className='py-14 md:py-20'>
                <div className='container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 space-y-5 md:hidden'>
                    <h2 className='text-3xl text-center '>
                        Programação do <span className='franieSemiBold text-[#0fff92] '>Saúde Empreende!</span>
                    </h2>

                    <p className='text-center'>
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

                        <div className='flex bg-[#463def] rounded-2xl overflow-hidden'>
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
                    </div>

                    <div className='mx-auto mt-10 w-fit flex'>
                        <a 
                            href='/Cronograma Saúde Empreende Experience.pdf' 
                            download='/Cronograma Saúde Empreende Experience.pdf'
                            target='_blank'
                            rel="noopener noreferrer"
                            className='px-5 pt-3 pb-2 rounded-2xl text-lg text-center uppercase transition-all bg-[#0fff94] text-[#2e2f32] hover:bg-[#2e2f32] hover:text-[#0fff94]'
                        >
                            programação completa
                        </a>
                    </div>
                </div>

            </section>


            {/* SECTION PALESTRANTES */}
            <section className='max-w-[1536px] mx-auto py-14 md:py-20'>
                <h2 className='font-franieSemiBold leading-tight text-3xl md:text-[45px] text-[#11fe92] text-center mb-5 md:mb-10'>
                    Conheça nossos palestrantes
                </h2>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1.1}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2.1 },
                        1280: { slidesPerView: 2.1 },
                    }}
                    modules={[Autoplay]}
                    className='!px-5'
                >
                    {infoPalestrantes.map((palestrante, index) => (
                        <SwiperSlide key={index}>
                            <div className='!w-full max-w-[650px] flex flex-col lg:flex-row rounded-2xl overflow-hidden'>
                                <div className='bg-[#0fff94]'>
                                    <img 
                                        src={palestrante.img}
                                        alt={`imagem da apresentadora ${palestrante.name} ${palestrante.sobrenome}`}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                <div className='p-5 w-full lg:max-w-[450px] xl:h-[372px] flex flex-col items-center justify-center gap-5 bg-[#463def]'>
                                    <h3 className='font-franieLight text-2xl text-center'>
                                        {palestrante.name} <br />
                                        <span className='font-franieSemiBold'>{palestrante.sobrenome}</span>
                                    </h3>

                                    <p className='font-franieLight text-sm text-wrap'>
                                        {palestrante.resume}
                                    </p>

                                    <button 
                                        onClick={() => openModal(palestrante)}
                                        className='px-5 pt-3 pb-2 rounded-2xl text-lg  uppercase transition-all bg-[#2e2f32] text-[#0fff94] hover:bg-[#0fff94] hover:text-[#2e2f32]'
                                    >
                                        Ver mais
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {selectedPalestrante && (
                    <Modal 
                        isOpen={isModalOpen}
                        onClose={closeModal} 
                        palestrante={selectedPalestrante}
                    />
                )}
            </section>

            
            {/* SECTION INGRESSO */}
            <section className='container mx-auto py-14 md:py-20 px-5 md:px-10 lg:px-16 xl:px-20 flex flex-col gap-5 md:flex-row md:justify-between'>
                <div 
                    className='w-full lg:w-1/2 space-y-4 md:space-y-6'
                    data-aos="fade-up-right"
                    data-aos-duration="3000"
                >
                    <h2 className='text-[40px] font-franieLight'>
                        Adquira <br />
                        <span className='font-franieSemiBold text-[#11fe92] '>seu ingresso</span>
                    </h2>

                    <span className='font-franieLight'>
                        Não perca essa chance única de transformar sua abordagem profissional e alcançar resultados extraordinários!
                    </span>

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
                            Direito a aquisição de um ingresso extra da after party. 
                        </li>
                    </ul>
                </div>
            </section>


            {/* SECTION TIMER */}
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
                        data-aos-duration="3000"
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

            
            {/* SECTION DESCONTO */}
            <section className='container mx-auto py-14 md:py-20 px-5 md:px-10 lg:px-16 xl:px-20 overflow-hidden'>
                <div 
                    className='relative w-full md:w-[90%] mx-auto px-5 pt-7  md:py-10 xl:py-14 md:px-10 bg-[#463def] rounded'
                    data-aos="fade-up"
                    data-aos-duration="3000"
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
            
            {/* FAQ */}
            <section className='container mx-auto py-14 md:py-20 px-5 md:px-10 lg:px-16 xl:px-20 space-y-4'>
                <h3 className='font-franieSemiBold text-xl md:text-4xl '>
                    Tem alguma dúvida?
                </h3>
                <p>
                    Separamos as dúvidas mais frequentes sobre o evento.
                </p>

                <div className='mt-7 w-full flex flex-col md:flex-row md:gap-5'>
                    <div className='w-full md:w-1/2 border-b-2 border-[#a4a4a5] md:border-b-0 '>
                        <Faq />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <Faq2 />
                    </div>
                </div>
            </section>


            {/* SECTION LAST */}
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
            

            {/* SECTION PATROCINADORES */}
            <section className='py-14 '>
                <h3 className='text-3xl  text-center font-franieSemiBold'>
                    Patrocinador <span className='text-[#0fff92] font-franieSemiBold'>Master:</span> 
                </h3>
                <img 
                    src={unipam}
                    alt="Logo Unipam"
                    className='mt-5 mx-auto w-full max-w-[300px] '
                />
                <h4 className='mt-10 text-center'>
                    Apoio:
                </h4>
                <div className='mt-3 grid grid-cols-3 max-w-[600px] mx-auto '>
                    <img 
                        src={xp}
                        alt="Logo Unipam"
                        className='mx-auto w-full max-w-[100px] '
                    />
                    <img 
                        src={jp}
                        alt="Logo Jovem Pam"
                        className='mx-auto w-auto max-h-[30px] '
                    />
                    <img 
                        src={olhar}
                        alt="Logo Olhar"
                        className='mx-auto w-full max-w-[100px] '
                    />
                </div>
            </section>

            
            {/* MAPA */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15128.267751019546!2d-46.4593519!3d-18.5710207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae8a483ecab70b%3A0xeb81e0942dfaf3fd!2sCentro%20de%20Conven%C3%A7%C3%B5es%20e%20Eventos%20UNIPAM!5e0!3m2!1spt-BR!2sbr!4v1723822029637!5m2!1spt-BR!2sbr"  
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full h-[400px] '
            />


            <BackToTop />

            {/* WHATSAPP */}
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