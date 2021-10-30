import styled from 'styled-components'

const app = styled.div `
width: 100%;
height: 100vh;
background-image: url('/img/images/login-background.jpg');
background-position: center;
background-size: cover;
 background-repeat: no-repeat;
 display: flex;
 justify-content: center;
 align-items: center;
`

export const Wrapper = styled.div `
  max-width: 50%;
  margin: 0 auto;
  height: auto !important;
  z-index: 999;

  @media(max-width: 768px){
      min-width: 70%;

  }
`


export const  ImageWrapper = styled.div`
max-width:  100%;
height: 100%

img{
    max-width: 100%;
    object-fit: contain;
}
`
export const ImageSecond = styled.div`
    max-width:  100%;
    height: 100%
    // display: none;

    img{
    max-width: 100%;
    object-fit: contain;
    }

`
export const ButtonWrapper = styled.div`
        max-width: 100%;
        height: 60px;
        margin-bottom: 20px;

        button{
            width: 100%;
              background:  lightgreen;
              height: 100%;
              border: none;
              outline-width: 0;
              font-weight: 700;
              text-transform: uppercase;
              font-size: 25px;
              font-family: monospace;
              color: white;
              letter-spacing: 5px;
              padding: 0 10px;
              border-radius: 5px;
        }
        @media (max-width: 768px) {
            button{
                font-size: 15px;
            }
        }
`
export const TextWrapper = styled.div`
        max-width: 100%;
        padding: 5px 10px;
        margin-bottom: 10px;

        p{
            font-size: 10px;
            text-align: center;
            text-transform: capitalize;
            font-family: monospace;
            line-height: 1.5;
            letter-spacing: 2px;
        }
`
export default app