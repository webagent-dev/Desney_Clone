import React from 'react'
import HomeIconContainer from '../../styles/homeIcon.style'

function HomeIcons({ icon, text}) {
    return (
        <HomeIconContainer>
            <span>{icon }</span>
           <p>{text}</p>
        </HomeIconContainer>
    )
}

export default HomeIcons
