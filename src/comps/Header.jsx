import React,{useEffect} from 'react'
import HeaderWrapper from '../styles/header.style'
import { Logo, Login, HomeContainer }from '../styles/header.style'
import HeaderIcon from './other/HomeIcons'
import { MdHome, MdSearch, MdOutlineAdd, MdOutlineStarPurple500 } from "react-icons/md"
import { GiTv } from "react-icons/gi"
import { useSelector, useDispatch} from 'react-redux'
import { selectLogin, login, logout } from '../features/userSlice'
import { auth, provider } from '../firebase'
import Avatar from 'react-avatar'
import { useHistory, Link } from 'react-router-dom'



function Header() {
    const user = useSelector(selectLogin)
    const dispatch = useDispatch()
    const history = useHistory()

    const loginHandler = () => {
        auth.signInWithPopup(provider)
    }

      useEffect(() => {
        auth.onAuthStateChanged((userData) => {
            if(userData){
                    history.push('/home')
                    dispatch(login({
                        photo: userData.photoURL,
                        name: userData.displayName
                    }))
            }else{
                history.push('/');
                dispatch(logout())
            }
        })
    },[dispatch, history])

        const handleLogOut = () => {
            auth.signOut()
            .then(() => console.log('you are logout'))
            dispatch(logout())
        }
    return (
        <HeaderWrapper>

               <Link to='/home' > <Logo>
            <img src='/img/images/logo.svg' alt="Logo_image" />
             </Logo></Link>
{ user ?
                <HomeContainer>
                    <HeaderIcon icon={<MdHome /> } text='Home' />
                    <HeaderIcon icon={<MdSearch /> } text='Search' />
                    <HeaderIcon icon={<MdOutlineAdd/> } text='watchlist' />
                    <HeaderIcon icon={<MdOutlineStarPurple500 /> } text='original' />
                    <HeaderIcon icon={<MdHome /> } text='movies' />
                    <HeaderIcon icon={<GiTv/> } text='series' />
                </HomeContainer>
        : null
}
{ !user ?
                <Login onClick={loginHandler}>
                    <button> <a href="#">Login</a></button>
                </Login>
        : 
        <Avatar  round={true} size='50px'  src={user.photo}  onClick={handleLogOut}/>
}
        </HeaderWrapper>
    )
}

export default Header
