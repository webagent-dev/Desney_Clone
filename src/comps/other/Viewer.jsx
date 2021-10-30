import React from 'react'
import ViewContainer from '../../styles/viewer.style'

function Viewer() {
    return (
        <ViewContainer>
             <div>
                <img src="/img/images/viewers-disney.png" alt="view_image" />
                <video  autoPlay loop muted playinline={true}>
                    <source  src='/img/videos/vid-1.mp4' type='video/mp4'/>
                </video>
             </div>
             <div>
                 <img src="/img/images/viewers-marvel.png" alt="view_image" />
                   <video  autoPlay loop muted playinline={true}>
                    <source  src='/img/videos/vid-2.mp4' type='video/mp4'/>
                </video>
                 </div>
             <div>
                 <img src="/img/images/viewers-national.png" alt="view_image" />
                   <video autoPlay loop muted playinline={true}>
                    <source  src='/img/videos/vid-3.mp4' type='video/mp4'/>
                </video>
                 </div>
             <div>
                 <img src="/img/images/viewers-pixar.png" alt="view_image" />
                   <video autoPlay loop muted  playinline={true}>
                    <source  src='/img/videos/vid-4.mp4' type='video/mp4'/>
                </video>
                 </div>
             <div>
                 <img src="/img/images/viewers-starwars.png" alt="view_image" />
                   <video autoPlay loop muted playinline={true} >
                    <source  src='/img/videos/vid-5.mp4' type='video/mp4'/>
                </video>
                 </div>
        </ViewContainer>
    )
}

export default Viewer
