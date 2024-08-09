
import Slider from "react-slick";

import draelis from "../../assets/images/logos-clientes/draelis.svg";
import farol from "../../assets/images/logos-clientes/farol.svg";
import giolaser from "../../assets/images/logos-clientes/giolaser.svg";
import leoni from "../../assets/images/logos-clientes/leoni.svg";
import mga from "../../assets/images/logos-clientes/mid.svg";
import neo from "../../assets/images/logos-clientes/neogenetics.svg";
import nova from "../../assets/images/logos-clientes/novageracao.svg";
import olha from "../../assets/images/logos-clientes/olharcerto.svg";
import patense from "../../assets/images/logos-clientes/patense.svg";
import pets from "../../assets/images/logos-clientes/petsmellon.svg";
import profat from "../../assets/images/logos-clientes/Profat.svg";
import sorridents from "../../assets/images/logos-clientes/sorridents.svg";
import transtri from "../../assets/images/logos-clientes/transtriangulo.svg";
import whg from "../../assets/images/logos-clientes/whg.png";
import zoomies from "../../assets/images/logos-clientes/zoomies.svg";
import mira from "../../assets/images/logos-clientes/mira.svg";
import docbiz from "../../assets/images/logos-clientes/docbiz.svg";
import insti from "../../assets/images/logos-clientes/institutosalus.svg";
import lj from "../../assets/images/logos-clientes/lj.svg";
import aligner from "../../assets/images/logos-clientes/newaligner.svg";
import salus from "../../assets/images/logos-clientes/salus.svg";
import amo from "../../assets/images/logos-clientes/amovacinas.svg";
import agro from "../../assets/images/logos-clientes/agroecologia.svg";

const slideContent = [
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={draelis} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={farol} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={giolaser} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={leoni} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={mga} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={neo} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={olha} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={patense} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={pets} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={profat} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={sorridents} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={transtri} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={whg} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={zoomies} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={mira} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={docbiz} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={insti} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={lj} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={aligner} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={neo} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={olha} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={salus} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={amo} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={nova} alt="" />,
    <img className="max-w-[300px] h-28 py-3 mx-5 " src={agro} alt="" />,
];

export default function ComponentCarrouselClientes() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1439,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
            {
                breakpoint: 766,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            },
        ]
      };

  return (
        <Slider {...settings} className="my-20 lg:my-28 w-full mx-auto flex justify-center ">
            {slideContent.map((slide, index) => (
                <div key={index} className="!w-full !h-full !mx-auto !flex !justify-center !items-center  text-white">
                    {slide}
                </div>
            ))}
          
        </Slider>
  );
}




/* arrays que precisma estar na pagina onde o swiper vai ser chamado contendo o conteudo dos sliders

const slideContent = [
    'Texto do Slide 1', 
    'Texto do Slide 2', 
    'Texto do Slide 3', 
    <Image key={1} src={import da imagem} alt="imagem tiago tessmann" className="w-auto h-[300px]"/>
];
        
const slideCount = slideContent.length;

o coponente será chamado assim:
<Slider
    slideContent= {slideContent}
    slideCount= {slideCount}
/>

<Swiper
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
    clickable: true,
    }}
    navigation={true}
    modules={[ Pagination, Navigation]}
    className="mySwiper rounded"
>
    {slideContent.map((content, index:number) => (
        <SwiperSlide key={index} className='w-full h-full flex justify-center items-center px-5'>
            {content}
        </SwiperSlide>
    ))}
</Swiper>
*/