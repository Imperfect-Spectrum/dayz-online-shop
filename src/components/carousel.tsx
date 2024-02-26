import { Carousel } from 'react-responsive-carousel';

export const Slider = () => {
  return (
    <div className="w-[100%] mx-auto ">
      <Carousel autoPlay showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true}>
        <div className=" ">
          <img alt="1" src="carousel_1.png" />
        </div>
        <div className=" ">
          <img alt="2" src="carousel_2.png" />
        </div>
        <div className=" ">
          <img alt="3" src="carousel_3.png" />
        </div>
      </Carousel>
    </div>
  );
};
