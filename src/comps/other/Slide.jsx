import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Sliders from  '../../styles/slider.styled'
import { SlideWrapper, Image, ImageOne, ImageTwo, ImageOther} from  '../../styles/slider.styled'

function Slide() {
    let setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidersToShow: 1,
        sliderToScroll: 1,
        autoplay: true,
    }
    return (
        <Sliders {...setting}>
              <SlideWrapper>   
                  <Image src='/img/images/slider-badag.jpg' alt='slider-image'></Image>
                  </SlideWrapper>
                <SlideWrapper>   
                     <ImageOne src='/img/images/slider-badging.jpg' alt='slider-image'></ImageOne>
                    </SlideWrapper>
                  <SlideWrapper> 
                        <ImageTwo src='/img/images/slider-scale.jpg' alt='slider-image'></ImageTwo>
                       </SlideWrapper>
                    <SlideWrapper>  
                          <ImageOther src='/img/images/slider-scales.jpg' alt='slider-image'></ImageOther>
                        </SlideWrapper>
        </Sliders>
    )
}

export default Slide
