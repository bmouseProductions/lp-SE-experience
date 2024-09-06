import CarrouselParceiros from '../assets/components/carrousel-clientes'

import unipam from '../assets/images/unipam.webp'

export default function SectionPatrocinadores() {
    return (
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
            <CarrouselParceiros />
        </section>
    )
}