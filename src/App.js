
import Container from './styles/app.style'
import { Wrapper } from './styles/app.style'
import { ImageWrapper, ButtonWrapper, TextWrapper, ImageSecond } from './styles/app.style'





function App() {
    return (
         < Container >
               <Wrapper>
                   <ImageWrapper>
                       <img src="/img/images/cta-logo-one.svg" alt="images" />
                   </ImageWrapper>
                   <ButtonWrapper> 
                        <button>get all there</button>
                   </ButtonWrapper>
                   <TextWrapper>
                       <p>get premier access to raya and the last dragon for an additional fee with a disney+ subscription as of 03/26/21, the price of disney+ and the disney bundle will increase by $1</p>
                   </TextWrapper>
                     <ImageSecond >
                         <img src="/img/images/cta-logo-two.png" alt="images" style={{maxWidth: '100%', objectFit: 'contain'}}/>
                   </ImageSecond >

               </Wrapper>
         < /Container>
    )
}

export default App