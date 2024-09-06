import Faq from '../assets/components/faq';
import Faq2 from '../assets/components/faq2';

export default function SectionFaq() {
    return (
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
    )
}