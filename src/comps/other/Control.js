import React from 'react'
import Controls  from '../../styles/control.style'

function Control({image, text}) {
    return (
      <Controls>
          <button>
              <img src={image} alt="" />
              <span>{text}</span>
          </button>
      </Controls>
    )
}

export default Control
