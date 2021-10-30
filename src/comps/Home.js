/* eslint-disable default-case */
import React, {  useEffect } from 'react'
import HomeContainer from '../styles/home.style'
import Slide from './other/Slide'
import Viewer from './other/Viewer'
import Recommander from './other/Recommander'
import Text from './other/Text'
import { db } from '../firebase'
import { useDispatch, useSelector} from 'react-redux'
import { setMovieData, selectNew, selectRecom, selectOriginal,  selectTrend} from '../features/movieSlice'
import { selectLogin} from '../features/userSlice'


function Home() {
    const user = useSelector(selectLogin)
    const dispatch = useDispatch()
    const newMovie = useSelector(selectNew)
    const recomMovies = useSelector(selectRecom)
    const originalMovie = useSelector(selectOriginal)
    const trendingMovie = useSelector(selectTrend)   
useEffect(() => {
      let news = []
        let original = []
         let recom = []
         let trending = []
            db.collection('movies')
            .onSnapshot((snap) => {
                snap.docs.map((doc) => {
                    switch(doc.data().type) {
                             case "recommend":
                                
                                recom = [...recom, {id: doc.id, ...doc.data()}]
                                    break;
                                 case "new":
                                    news = [...news, {id: doc.id, ...doc.data()}]
                                    break;
                                     case "original":
                                   original = [...original, {id: doc.id, ...doc.data()}]
                                    break;
                                    case "trending":
                                    trending =   [...trending, {id: doc.id, ...doc.data()}]
                                    break;
                    }

                       dispatch(setMovieData({
                new: news,
                recom: recom,
                original: original,
                trending: trending,
            }))
                })
            })
},[user, dispatch])


    return (
      <HomeContainer>
          <Slide />

          <Viewer />
<Text  text='Recommanded for you' />
    <Recommander  data={ newMovie}/>
<Text  text='new to disney+' />
    <Recommander   data={recomMovies} />
<Text  text='originals' />
<Recommander   data={ originalMovie } />
<Text  text='tranding' />
<Recommander    data={  trendingMovie} />

      </HomeContainer>
    )
}

export default Home
