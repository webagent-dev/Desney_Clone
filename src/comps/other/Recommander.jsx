import React from 'react'
import RecomContainer from '../../styles/recom.style'
import { Link } from  'react-router-dom'

function Recommander({data}) {
    return (
        <RecomContainer>
            { 
                data && 
                data.map((doc, key) => {
                    return(
                        <div key={doc.id}>
                            <Link to={`/pageid/${doc.id}`}>
                                <img src={doc.cardImg} alt={doc.title} />
                            </Link>
                        </div>
                    )
                })
            }
        </RecomContainer>
    )
}

export default Recommander
