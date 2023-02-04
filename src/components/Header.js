import React, { useEffect } from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {selectUserName, selectUserPhoto,setSignOutState ,setUserLoginDetails} from '../features/user/userSlice';

function Header() {

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

    // auth.signInWithPopup(provider)
    // .then((result) => {
    //   let user = result.user
    //   dispatch(setUserLoginDetails({
    //     name: user.displayName,
    //     email: user.email,
    //     photo: user.photoURL,
    //   }))
    //   history.push('/')
    // })
}

// const signOut = () => {
//   auth.signOut().then(() => {
//     dispatch(setSignOutState());
//     history.push('/login')
//   })
// }

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
    <Nav>
      <Logo >
      <img src="/images/favicon.png" alt="Rompy Gamer" />
      </Logo>

      {
        !userName ?
            <Login onClick={handleAuth} >Login</Login>
            :
            <>
            <SignOut>
                <UserImg src={userPhoto} alt={userName}/>
                <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                </DropDown>
            </SignOut>
            </>
      }
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  /* width: 50%; */
  padding-top: 30px;
  top: 0;
  left: 0;
  right: 0;
  /* border: 2px solid red; */
  backdrop-filter: blur(5px);
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 120px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;


  img {
    display: block;
    width: 100%;
  }
`;

const Login = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color:white;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  user-select: none;
  transition: all 0.2s ease 0s;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border: transparent;
    cursor: pointer;
  }
`;

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
  margin:10px 0;
  /* border:2px solid red; */

`

const DropDown = styled.div`
position: absolute;
top: 36px;
right: 0;
margin-right: 20px;
background: rgb(19,19,19);
border: 1px solid rgba(151,151,151,0.34);
border-radius: 4px;
box-shadow: rgb(0 0 0/50%) 0px 0px 18px 0px;
padding: 10px;
font-size: 14px;
letter-spacing: 1px;
width: 105px;
opacity: 0;
font-family: 'Poppins', sans-serif;
/* border:2px solid red; */


`;

const SignOut = styled.div`
position: relative;
/* border:2px solid red; */
  margin:10px 0;

    height: 36px;
    width: 36px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg}{
        border-radius:50%;
        width:100%;
        height:100%;
    }

    &:hover{
      ${DropDown}{
        opacity:1;
        transition-duration: 1s;
        color:white;

      }
    }
`;
export default Header
