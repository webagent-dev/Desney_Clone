import styled from     'styled-components'

const HomeIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    position: relative;
    cursor: pointer;


    h3{
        font-weight: lighter;
        text-transform: uppercase;
        font-size: 15px!important;
        // padding: 2px 5px;
        font-family: cursive;
    }


    &::before{
        content: "";
        background: white;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        left: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition all 250ms cubic-bezier(0.25, 0.25, 0.4);
        visibility: hidden;
        width: auto;
        z-index: 99;
    }
&:hover{
    visibility: visible;
    transform: scaleX(1);
    opacity: 1 !important;
}
`



export default HomeIconContainer