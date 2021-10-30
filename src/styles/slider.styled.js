import Slider from 'react-slick'
import styled from 'styled-components'


const Sliders = styled(Slider)`
    margin-top: 20px;
    width: 90%;
    margin: 0 auto;
    height: auto;
    padding: 5px 10px;
     transition: all 5s cubic-bezier(0.25, 0.46, 0.45, 0.4);
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);
    border-radius: 10px;

    &:hover{
          border: 5px solid rgba(249, 249, 249, 0.1);
          border-color: white;
    }
    ul li{
        width: 10px;
        height: 10px;
        background: gray;
        border-radius: 50%;

        li.slick-active button:before{
            background: green;
        }
    }

`

export const SlideWrapper =styled.div`
    width: 100%;
    height: 100%;

`
export const Image = styled.img`
    width: 100%;
    object-fit: contain;
`
export const ImageOne = styled.img`
    width: 100%;
    object-fit: contain;
`
export const ImageTwo = styled.img`
    width: 100%;
    object-fit: contain;
`
export const ImageOther = styled.img`
    width: 100%;
    object-fit: contain;
`
export default Sliders