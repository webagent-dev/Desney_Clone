import styled from     'styled-components'

const HeaderWrapper  = styled.div`
    background: black;
    color: white;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    width: 100%;
    height: 65px;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 99;
    padding: 20px;
 
`
export const  Logo =  styled.section `
    width: 100px;
padding: 2px 10px;
    img{
    width: 100%;
        object-fit: contain;
        cursor: pointer;
    }
`
export const  Login = styled.div`

    button{
        padding: 10px 25px;
        background: transparent;
        border: none;
        border: 1px solid gray;
        cursor: pointer;
        outline-width: 0;
        border: radius: 5px;
    }

    button > a{
         letter-spacing: 2px;
         text-transform: uppercase;
         font-weight: 700;
    }
`
export const HomeContainer = styled.div`
    flex: 1;
    display: flex;
    gap: 2.5rem;

    @media (max-width: 768px){
        display: none;
    }
`


export default HeaderWrapper