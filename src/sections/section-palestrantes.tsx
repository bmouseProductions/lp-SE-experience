import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Modal  from '../assets/components/modal-palestrantes';

import anaCard from '../assets/images/palestrantes/anaCard.webp'
import clenioCard from '../assets/images/palestrantes/clenioCard.webp'
import elisangelaCard from '../assets/images/palestrantes/elisangelaCard.webp'
import henriqueCard from '../assets/images/palestrantes/henriqueCard.webp'
import marcioCard from '../assets/images/palestrantes/marcioCard.webp'
import tomCard from '../assets/images/palestrantes/tomCard.webp'
import jaymeCard from '../assets/images/palestrantes/jaymeCard.webp'
import cleberCard from '../assets/images/palestrantes/cleberCard.webp'
import igorLuisCard from '../assets/images/palestrantes/luis-igorCard.webp'


interface Palestrante {
    img: string;
    name: string;
    sobrenome: string;
    resume: string;
    about: string;
}

export default function SectionPalestrantes() {
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
            sobrenome: 'Gonçalves',
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
        {
            name: 'Cleber ',
            sobrenome: 'Soares',
            img: cleberCard,
            resume: `Cleber Soares é cirurgião-dentista e sócio-fundador do Grupo Salus, maior holding de saúde e bem-estar 
            do Brasil. Ele traz para o evento sua experiência na expansão de grandes marcas e mostra como a diversificação e a 
            persistência são essenciais para o sucesso no setor da saúde.`,
            about: ` Cleber Soares é cirurgião-dentista e sócio-fundador do Grupo Salus, a maior holding de saúde e bem-estar 
            do Brasil. Com uma trajetória sólida no empreendedorismo, ele e sua esposa, Carla Sarni, construíram um império que
            engloba franquias odontológicas, oftalmológicas, de vacinas e estética espalhadas por todo o país. Sua vasta experiência 
            em diversificação de negócios e crescimento contínuo na área da saúde o tornaram uma referência em expansão de grandes 
            marcas.  <br/> <br/>
            No Saúde Empreende Experience, Cleber compartilhará sua visão estratégica e inovadora sobre como empreender 
            na saúde, abordando desde os desafios até as grandes conquistas. Ele trará experiências valiosas sobre a importância 
            da diversificação de renda e a persistência para quem deseja crescer e se destacar no mercado.`
        },
        {
            name: 'Luiz Boesel e',
            sobrenome: 'Igor Coury',
            img: igorLuisCard
            ,
            resume: `Luiz Boesel, sócio da Inove Investimentos e Private Banker, e Igor Coury, Head de Asset Allocation, fazem 
            parte da Inove, um dos braços da XP. Com uma sólida experiência no mercado financeiro, eles apresentarão no Saúde 
            Empreende Experience estratégias para equilibrar riscos e maximizar oportunidades financeiras, garantindo estabilidade 
            e crescimento aos profissionais da saúde.`,
            about: `Luiz Boesel, sócio da Inove Investimentos e Private Banker, e Igor Coury, Head de Asset Allocation, fazem 
            parte da equipe de um dos braços da grande XP. Esses profissionais trazem sua vasta experiência em investimentos e 
            planejamento financeiro ao Saúde Empreende Experience. Com profundo conhecimento sobre diversificação de renda e 
            gestão de capital, ambos são especialistas em criar estratégias seguras e eficientes no setor financeiro. Ao longo 
            de suas carreiras, ajudaram inúmeros profissionais a equilibrar riscos e maximizar retornos, sempre com uma abordagem 
            sólida e personalizada. <br/> <br/>
            Na palestra, eles vão compartilhar sua visão estratégica sobre investimentos, abordando temas essenciais para 
            auxiliar os profissionais da saúde a criarem uma base financeira robusta, ampliar fontes de renda e garantir 
            estabilidade em suas carreiras.`
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
    }

    return (
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

                            <div className='p-5 w-full lg:max-w-[450px] xl:h-[400px] flex flex-col items-center justify-center gap-5 bg-[#463def]'>
                                <h3 className='font-franieLight text-2xl text-center'>
                                    {palestrante.name} <br />
                                    <span className='font-franieSemiBold'>{palestrante.sobrenome}</span>
                                </h3>

                                <p className='font-franieLight text-sm text-wrap'>
                                    {palestrante.resume}
                                </p>

                                <button 
                                    onClick={() => openModal(palestrante)}
                                    className='px-5 pt-3 pb-2 rounded-2xl text-lg  uppercase transition-all bg-[#2e2f32] text-[#0fff94] hover:bg-[#0fff94] hover:text-[#2e2f32] border-2 border-[#2e2f32]'
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
    )
}