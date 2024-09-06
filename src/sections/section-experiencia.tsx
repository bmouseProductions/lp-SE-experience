import logoEvento from '../assets/images/logo-saudeExperience.svg'

export default function SectionExperiencia() {
    return (
        <section 
            className='container mx-auto py-14 md:py-20 px-5 md:px-10 lg:px-16 xl:px-20 flex flex-col items-center gap-5'
            data-aos="fade-up"
            data-aos-duration="1500"
        >
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
    )
}