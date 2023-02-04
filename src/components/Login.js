import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from './Header';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {selectUserName, selectUserPhoto,setSignOutState ,setUserLoginDetails} from '../features/user/userSlice';

function Login() {

    document.title = 'Login | Rompy Gamer';

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
                history.push("/home");
            }
        });
    }, [userName]);

    const handleAuth = () => {
        if(!userName){
        auth.signInWithPopup(provider).then((result) => {
            setUser(result.user);
        }).catch((error) => {
            alert(error.message);
        })
    }else if(userName){
        auth.signOut().then(() => {
            dispatch(setSignOutState())
            history.push('/')
        }).catch((error) => alert(error.message));
    }
} 

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };


  return (
    <>
    <Header/>
    <Container>
        <Wrap>

        <h1>Sign In To Continue</h1>
        <Logos>
            <img  src='/logos/logo_login_2x.png' alt=''/>
            {/* <img className='black' src='https://toppng.com/uploads/preview/ubisoft-logo-old-11530962437ptwbolfl29.png' alt=''/>
            <img src='http://assets.stickpng.com/thumbs/6213a6ad9e489670308bdb90.png' alt=''/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo-Guerrilla-Games.png' alt=''/> */}
        </Logos>
        <button onClick={handleAuth}>Sign In</button>
        </Wrap>
    </Container>
    </>
  )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url(images/background.png);
    display: flex;
    align-items: center;
    justify-content: center;

    
`;

const Logos = styled.div`
/* border: 2px solid red; */
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 70px;

    img{
        width: 100%;
        height:200px;
    }

    @media(max-width:768px){ 
        display: none;
    }

    @media(max-height:550px){ 
        display: none;
    }
`;

const Wrap = styled.div`
display: flex;
margin: 20px;
align-items: center;
justify-content: center;
flex-direction: column;
/* border: 2px solid red; */

 > h1{
    color:white;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
}

button{
    background: transparent;
    color: white;
    padding: 20px 30px;
    font-size: 1.2rem;
    letter-spacing: 1px;
    border: 1px solid white;
    transition: 0.2s ease-in-out;


    &:hover{
        background: white;
        color: black;
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }
}
`;


export default Login
