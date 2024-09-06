import ImageGallery from "react-image-gallery";
import { useState } from "react";

import ModalFratele from "../assets/components/modal-fratele";

import "react-image-gallery/styles/css/image-gallery.css";

import logoVita from '../assets/images/logoCarpevita.svg'

import parking from '../assets/images/icons/parking-icon.svg'
import bandeja from '../assets/images/icons/bandeja-icon.svg'
import cadeira from '../assets/images/icons/cadeira-icon.svg'
import coffe from '../assets/images/icons/coffe-icon.svg'
import drink from '../assets/images/icons/drink-icon.svg'
import family from '../assets/images/icons/family-icon.svg'
import restaurante from '../assets/images/icons/restaurante-icon.svg'
import wifi from '../assets/images/icons/wifi-icon.svg'

import zap from '../assets/images/whatsapp.png'

export default function SectionFratele(){
    const images = [
        {
          original: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312646402.jpg?k=fea427c9c9ea83c1dcfe91680bd642143ecec4c9cd96246753ee30f592a60735&o=&hp=1",
          thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312646402.jpg?k=fea427c9c9ea83c1dcfe91680bd642143ecec4c9cd96246753ee30f592a60735&o=&hp=1",
        },
        {
          original: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312642704.jpg?k=cb639cc4cfa218ba43672bd3144f715d20d55e96ef71107ee7e99b557103ecc9&o=&hp=1",
          thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312642704.jpg?k=cb639cc4cfa218ba43672bd3144f715d20d55e96ef71107ee7e99b557103ecc9&o=&hp=1",
        },
        {
          original: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312642493.jpg?k=562090ac245b15fe8e418dbaea1fd5127b710b0b70e6fc8afbcd2cb093c073e1&o=&hp=1",
          thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312642493.jpg?k=562090ac245b15fe8e418dbaea1fd5127b710b0b70e6fc8afbcd2cb093c073e1&o=&hp=1",
        },
        {
          original: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/226850185.jpg?k=87cbe2f7bc651432a2553f6b56d91f34b2b00260fd8477c0aa37575abb05b5d7&o=&hp=1",
          thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/226850185.jpg?k=87cbe2f7bc651432a2553f6b56d91f34b2b00260fd8477c0aa37575abb05b5d7&o=&hp=1",
        },
        {
          original: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/226850211.jpg?k=334aae404b8fd34591987906973e8596a2783c7a0d7a73d857c0ddd2534b1004&o=&hp=1",
          thumbnail: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/226850211.jpg?k=334aae404b8fd34591987906973e8596a2783c7a0d7a73d857c0ddd2534b1004&o=&hp=1",
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
        setIsModalOpen(true);
    };
  
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <section className="container mx-auto py-14 md:py-20 px-5 md:px-10 lg:px-16 xl:px-20 ">
                <h2 className=' leading-tight text-3xl md:text-[45px] text-center '>
                    Precisa de <span className="font-franieSemiBold text-[#11fe92]">acomodações?</span> 
                </h2>
                <h3 className="text-xl text-center mt-3 mb-7 md:mb-14">
                    Você é de outra cidade e deseja participar do evento? Temos parceiros que podem te 
                    ajudar com a hospedagem e transporte.
                </h3>
                <div className="flex flex-col xl:flex-row gap-10">
                    <div className='w-full xl:w-1/2 space-y-5'>
                        <h3 className="text-3xl text-[#0fff94] ">
                            Conheça o Fratelle Bussiness Hotel
                        </h3>

                        <p>
                            Localizado em Patos de Minas, o Fratele Business Hotel é um elegante estabelecimento 4 estrelas que 
                            oferece uma experiência de hospedagem confortável e moderna. O hotel conta com um bar e um restaurante 
                            que serve deliciosa culinária italiana, além de um terraço ideal para relaxar. Seus quartos são equipados 
                            com ar-condicionado, Wi-Fi gratuito, TV de tela plana via satélite, cofre, e possuem banheiro privativo 
                            com toalhas e roupa de cama de qualidade. Os hóspedes podem começar o dia com um café da manhã variado em 
                            estilo buffet ou continental. O estacionamento privativo gratuito está disponível, e a recepção 24 horas 
                            está à disposição, com atendentes que falam inglês e português, garantindo um serviço atencioso e eficiente
                            durante toda a estadia.
                        </p>

                        <ul className='flex flex-wrap gap-3'>
                            <li className='flex gap-2'>
                                <img 
                                    src={parking} 
                                    alt={`icone ${parking}`} 
                                    className='w-6 items-center'
                                />
                                <span>
                                    Estacionamento gratuito;
                                </span>
                            </li>

                            <li className='flex gap-2'>
                                <img 
                                    src={wifi} 
                                    alt={`icone ${wifi}`} 
                                    className='w-6 items-center'
                                />
                                <span>
                                    Wi-Fi gratuito;
                                </span>
                            </li>

                            <li className='flex gap-2'>
                                <img 
                                    src={bandeja} 
                                    alt={`icone ${bandeja}`} 
                                    className='w-6 items-center'
                                />
                                <span>
                                    Serviço de quarto;
                                </span>
                            </li>

                            <li className='flex gap-2'>
                                <img 
                                    src={cadeira} 
                                    alt={`icone ${cadeira} de rodas`} 
                                    className='w-6 items-center'
                                />
                                <span>
                                    Instalações para pessoas com deficiência;
                                </span>
                            </li>

                            <li className='flex gap-2'>
                                <img 
                                    src={drink} 
                                    alt={`icone ${drink}`} 
                                    className='w-6 items-center'
                                />
                                <span>
                                    Bar;
                                </span>
                            </li>

                            <li className='flex gap-2'>
                                <img 
                                    src={coffe} 
                                    alt={`icone ${coffe}`} 
                                    className='w-6 items-center'
                                />
                                <span>
                                    Café da manhã estilo buffet ou continental;
                                </span>
                            </li>

                            <li className='flex gap-2'>
                                <img 
                                    src={restaurante} 
                                    alt={`icone ${restaurante}`} 
                                    className='w-6 items-center'
                                />
                                <span>
                                    Restaurante;
                                </span>
                            </li>

                            <li className='flex gap-2'>
                                <img 
                                    src={family} 
                                    alt={`icone ${family}`} 
                                    className='w-6 items-center'
                                />
                                <span>
                                    Quartos para famílias;
                                </span>
                            </li>
                        </ul>
                        
                        <strong className="font-franieSemiBold">Contato para reservas:</strong> <br />
                        <p>
                            Entre em contato pelo número 
                            <a 
                                href="https://wa.me/553496658200?text=Ol%C3%A1!%20Vou%20participar%20do%20evento%20Sa%C3%BAde%20Empreende%20Experience%20e%20gostaria%20de%20reservar%20um%20quarto%20com%20o%20desconto." 
                                target="_blank" 
                                className="underline mx-1"
                            >
                                (34) 99665 - 8200
                            </a> ou pelo e-mail 
                            <a href="mailto:reservas@hotelfratele.com" target="_blank" className="underline mx-1">
                                reservas@hotelfratele.com
                            </a>, 
                            informar o nome do grupo para ser aplicado o desconto.
                        </p>

                        <button 
                            onClick={() => openModal()}
                            className='px-5 pt-3 pb-2 rounded-2xl text-lg  uppercase transition-all bg-[#0fff94] text-[#2e2f32] hover:bg-[#2e2f32] hover:text-[#0fff94] border-2 border-[#0fff94]'
                        >
                            Saiba mais
                        </button>
                    </div>

                    <div className="w-full xl:w-1/2">
                        <ImageGallery items={images} />
                    </div>
                </div>

                
                <h3 className="mb-5 mt-10 text-2xl text-center font-franieSemiBold">
                    Precisa de trasporte?
                </h3>
                <div className="flex flex-col md:flex-row gap-5 md:gap-10 xl:gap-20">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img 
                            src={logoVita}
                            alt="logo empresa da empresa Vita Viagens"
                            className="w-full max-w-[400px] " 
                        />
                    </div>

                    <div className="w-full md:w-1/2 space-y-3">
                        <p >
                            A Agência de Turismo Carpe Vita Viagens pode te ajudar a organizar transporte e hospedagem com os melhores preços.
                        </p>
                        <p>
                            Entre em contato com a agência:
                        </p>
                            
                        <a 
                            href="https://wa.me/5534999500201?text=Ol%C3%A1!%20Vou%20participar%20do%20evento%20Sa%C3%BAde%20Empreende%20Experience%20e%20gostaria%20de%20organizar%20o%20transporte%20para%20o%20local.%20Poderiam%20me%20ajudar%20com%20isso?" 
                            target="_blank"
                            className="flex items-center gap-2"
                        >
                            <img src={zap} alt="icone whatsapp" className="w-10" />
                            (34) 99950-0201
                        </a>
                        
                    </div>
                </div>
            </section>

            <ModalFratele 
                isOpen={isModalOpen}
                onClose={closeModal} 
            />
        </>
    )
}