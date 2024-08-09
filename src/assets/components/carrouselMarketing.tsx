
import Slider from "react-slick";

import drone from "../../assets/images/drone.png";
import tom from "../../assets/images/tom.png";
import camera1 from "../../assets/images/camera1.png";
import camera2 from "../../assets/images/camera2.png";

const slideContent = [
    <img className=" !w-full py-3 px-5 " src={drone} alt="" />,
    <img className=" !w-full py-3 px-5 " src={tom} alt="" />,
    <img className=" !w-full py-3 px-5 " src={camera1} alt="" />,
    <img className=" !w-full py-3 px-5 " src={camera2} alt="" />,
];

export default function CarrouselMarketing() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        responsive: [
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
        <Slider {...settings} className=" !max-w-screen !flex !justify-center !gap-3">
            {slideContent.map((slide, index) => (
                <div key={index} className="!w-full !flex !justify-center !gap-3">
                    {slide}
                </div>
            ))}
          
        </Slider>
  );
}