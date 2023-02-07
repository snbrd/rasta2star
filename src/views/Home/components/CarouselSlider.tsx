import React from 'react'
import Slider from 'react-slick'
import FirstImage from '../../../assets/homepageslider/BNB-Buyback.jpg'
import SecondImage from '../../../assets/homepageslider/Builders-Staking.jpg'
import ThirdImage from '../../../assets/homepageslider/Explorers-Staking.jpg'
import FourthImage from '../../../assets/homepageslider/Farmers-Flip.jpg'
import FifthImage from '../../../assets/homepageslider/Farmers-Staking.jpg'
import SixthImage from '../../../assets/homepageslider/Liquidity-Fair.jpg'
import SeventhImage from '../../../assets/homepageslider/Zero-Tax.jpg'
import EightImage from '../../../assets/homepageslider/Zion-Transporter.jpg'

export default function CarouselSlider(){
    const sliderSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 5500,
        autoplaySpeed: 5500,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "60px",
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return(
        <>
        <div className='w-full px-12 pb-16 md:px-20 md:mt-16 md:pb-16'>
            <Slider {...sliderSettings}>
                <div>
                    <img src={FirstImage} alt=""/>
                </div>
                <div>
                    <img src={SecondImage} alt=""/>
                </div>
                <div>
                    <img src={ThirdImage} alt=""/>
                </div>
                <div>
                    <img src={FourthImage} alt=""/>
                </div>
                <div>
                    <img src={FifthImage} alt=""/>
                </div>
                <div>
                    <img src={SixthImage} alt=""/>
                </div>
                <div>
                    <img src={SeventhImage} alt=""/>
                </div>
                <div>
                    <img src={EightImage} alt=""/>
                </div>
            </Slider>
        </div>
        </>
    )
}