import styled from 'styled-components'


const RecomContainer = styled.div`
        width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    padding: 30px 0px 26px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem;
 

    div{
         padding-top: 56.25%;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        border-radius: 10px;
         box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);
         transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.4);
         border: 3px solid rgba(249, 249, 249, 0.1);

            &:hover{
                box-shadow:  rgba(0 0 0 /80%) 0px 40px 58px -16px, rgba(0 0 0 / 72%) 0px 30px 22px -10px;
                transform: scale(1.05);
        }
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
    }

       @media (max-width: 768px){
            grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`






export default RecomContainer