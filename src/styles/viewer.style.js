import styled from 'styled-components'



const viewContainer = styled.div`
width: 90%;
margin: 0 auto;
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 2rem;

    div{
        padding-top: 56.25%;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        border: 3px solid rgba(249, 249, 249, 0.1);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.4);
        box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);
        border-radius: 10px;


         img{
        position: absolute;
        inset: 0px;
        display: block;
        border-radius: 10px;
        object-fit: cover;
        height: 100%;
        transition: opacity 5s ease-in-out  0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }
    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }
          &:hover{
                box-shadow:  rgba(0 0 0 /80%) 0px 40px 58px -16px, rgba(0 0 0 / 72%) 0px 30px 22px -10px;
                transform: scale(1.05);
        }
    }
   

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr))
    }
`



export  default viewContainer