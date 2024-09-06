import { Button } from '../assets/components/botao';

export default function Sectionvideo() {
    return (
        <section className='py-14 md:py-20 flex flex-col items-center gap-5'>
            <iframe
                className="w-[90%] md:w-[80%] h-[200px] md:h-[515px] xl:h-[620px] rounded-3xl"
                src="https://www.youtube.com/embed/XB0J3mVluWA?si=JCwsAXOa7HcIC3Zx"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <Button children="garanta seu ingresso" variant='secondary' />
        </section>
    )
}