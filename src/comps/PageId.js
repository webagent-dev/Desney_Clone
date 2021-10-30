import React, { useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { db } from '../firebase'


function PageId() {
    const {id}= useParams()
    const [content, setContent]  = useState({})
const history = useHistory()
    useEffect(() => {
      db.collection('movies').doc(id).get()
      .then((doc) => {
        if(doc.exists){
          setContent(doc.data())
        }else{
          history.push('/home')
          setContent({})
        }
      })
    },[id, history])
    return (
       <div  className='pageContainer'>
           <img src={content.backgroundImg} alt="card-pic" />
         <div className="other">
         <div className="other-image">
          <img src={content.titleImg} alt="other-pix" />
         </div>
         <div className="btn-container">
           <button>
             <img src="/img/images/play-icon-black.png" alt="btn-pix" />
             <span>play</span>
           </button>
           <button style={{background: 'black', color: 'white', border: '3px solid white'}}>
             <img src="/img/images/play-icon-white.png" alt="btn-pix" />
             <span>trailer</span>
           </button>
           <button style={{background: 'black', borderRadius: '50%',  border: '3px solid white'}}>
             <img src="/img/images/watchlist-icon.svg" alt=""  style={{width: '40px',}} />
           </button>
           <button style={{background: 'black', borderRadius: '50%',  border: '3px solid white'}}>
             <img src="/img/images/group-icon.png" alt=""  style={{width: '40px',}}/>
           </button>
         </div>
         <div className="text-container">
           <p>{content.subTitle}</p>

        <h3>{content.description}</h3>
         </div>
         </div>

       </div>
    )
}

export default PageId
