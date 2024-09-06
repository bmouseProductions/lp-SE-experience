
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import inove from "../../assets/images/parceiros/Inove.webp";
import jp from "../../assets/images/parceiros/JP.webp";
import olhar from "../../assets/images/parceiros/Olhar.webp";
import casa from "../../assets/images/parceiros/Casa.webp";
import bioma from "../../assets/images/parceiros/Bioma.webp";
import madame from "../../assets/images/parceiros/Madame Cacao.webp";
import m3 from "../../assets/images/parceiros/M3.webp";
import zero from "../../assets/images/parceiros/Zero.webp";
import naimeg from "../../assets/images/parceiros/Naimeg.webp";
import carpe from "../../assets/images/parceiros/Carpevita.webp";
import fratele from "../../assets/images/parceiros/Fratele.webp";

const slideContent = [
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={inove} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={jp} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={olhar} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={casa} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={bioma} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={madame} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={m3} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={zero} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={naimeg} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={carpe} alt="" />,
    <img className="max-w-[100px] w-auto h-20 py-3 mx-5 " src={fratele} alt="" />,
];

export default function CarrouselParceiros() {
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
        <Slider {...settings} className="my-10  w-full mx-auto flex justify-center ">
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