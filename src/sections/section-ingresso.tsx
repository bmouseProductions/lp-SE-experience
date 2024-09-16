import { Button } from '../assets/components/botao'
import iconCoracao from '../assets/images/icons/iconCoracao.svg'

export default function SectionIngresso() {
    return (
        <section className='container mx-auto py-14 md:py-20 px-5 md:px-10 lg:px-16 xl:px-20 flex flex-col gap-5 md:flex-row md:justify-between'>
            <div 
                className='w-full lg:w-1/2 space-y-4 md:space-y-6'
                data-aos="fade-up-right"
                data-aos-duration="1500"
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
                
                
                    <s className='text-sm text-gray-400'>
                        R$ 600,00
                    </s>
                    <span className='text-4xl '>
                        R$ 500,00
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
    )
}