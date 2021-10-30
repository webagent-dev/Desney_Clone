import styled from 'styled-components'

const PageContainer = styled.div`
    position: relative;
    margin-top: 70px;
    min-height: calc(199vh - 250px);
    width: 100vw;
    overflow-x: hidden;
    display: block;
    padding: 30px calc(3.5vw - 5px);
    top: 70px;

    div{
        left: 0px;
        opacity: 0.8;
        position: fixed;
        right: 0px;
        top: 0px;
        z-index: -1;
         margin-top: 70px;
        img{
            width: 100vw;
            height: 100vh;

            @media (max-width: 768px){
                width: initial;
            }
        }
    }
`

export const ImageTitle = styled.div`
align-items: center;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
// margin: 0 auto;
margin-top: 100px;
height: 30vw;
min-height: 170px
padding-bottom: 24px;
width: 100%;

img{
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
    object-fit: contain;
}
`

export const ContentMeta = styled.div`
            max-width: 874px;
            height: 80px;
            margin-top: 420px;
`
export const Control = styled.div`
    width:  100%;
    display: flex;
    display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
margin: 24px 0px;
min-height: 56px;

`

export const Player = styled.button`
                max-width: 60px;
                max-height:  50px;
               font-size: 15px;
                margin: 0px 22px 0px 0px;
                padding: 5px 24px;
                // height: 56px;
                border-radius: 4px;
                display: flex;
                 align-items: center
                 justify-content: center;
                 letter-spacing: 1.8px;
                cursor: pointer;
                text-transform: uppercase; 
                img{
                    width: 100%;
                    object-fit:  contain;
                }
`

export default PageContainer