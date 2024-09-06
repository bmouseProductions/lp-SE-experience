import SectionBanner from './sections/section-banner';
import SectionProgramacao from './sections/section-programacao';
import Sectionvideo from './sections/section-video';
import SectionPalestrantes from './sections/section-palestrantes';
import SectionIngresso from './sections/section-ingresso';
import SectionTimer from './sections/section-timer';
import SectionDesconto from './sections/section-desconto';
import SectionFaq from './sections/section-faq';
import SectionPatrocinadores from './sections/section-patrocinadores';

import logoBmouse from './assets/images/logo-Bmouse.svg'
import Whatsapp from './assets/images/whatsapp.png';
import BackToTop from './assets/components/backToTop';
import SectionExperiencia from './sections/section-experiencia';
import SectionFratele from './sections/section-fratele';

export default function Home() {
    const countdownDate = new Date('2024-09-20T00:00:00');

    return (
        <>  
            <SectionBanner countdownDate={countdownDate} />
            <Sectionvideo />
            <SectionProgramacao />
            <SectionPalestrantes />
            <SectionIngresso />
            <SectionTimer countdownDate={countdownDate} />
            <SectionDesconto />
            <SectionFratele />
            <SectionFaq />
            <SectionExperiencia />
            <SectionPatrocinadores />
            <BackToTop />

            {/* MAPA */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15128.267751019546!2d-46.4593519!3d-18.5710207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae8a483ecab70b%3A0xeb81e0942dfaf3fd!2sCentro%20de%20Conven%C3%A7%C3%B5es%20e%20Eventos%20UNIPAM!5e0!3m2!1spt-BR!2sbr!4v1723822029637!5m2!1spt-BR!2sbr"  
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full h-[400px] '
            />

            {/* WHATSAPP BUTTON */}
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