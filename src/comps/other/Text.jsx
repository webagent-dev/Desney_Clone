import React from 'react'
import TextContainer from '../../styles/text.style'

function Text({ text }) {
    return (
        <TextContainer>
            <p>{text}</p>
        </TextContainer>
    )
}

export default Text
