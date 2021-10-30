import styled  from 'styled-components'


 const Controls = styled.div`
    
    
        img{
            width: 32px;
            // height: 100%;
            object-fit: contain;
        }
        &:hover{
            background: rgb(198, 198, 198);
        }
          @media (max-width: 768px){
        height: 35px;
        padding: 0px 22px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
    }
    }

 `



 export default Controls