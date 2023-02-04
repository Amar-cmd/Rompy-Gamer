import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../components/ImgSlider';
import Catalogues from './Catalogues';
import { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
import {setGames} from '../features/game/gameSlice';
import {selectUserName} from '../features/user/userSlice';
import Header from './Header';

function Home() {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let catalogues = [];
  document.title = `Home | ${userName}`;


  useEffect(() => {
    db.collection('games').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(catalogues);
        switch(doc.data().type){
          case 'catalogue':
            // recommends.push({id: doc.id, ...doc.data()})
            catalogues = [...catalogues, {id: doc.id, ...doc.data()}]
            break;
        }
      });
  

    dispatch(
      setGames({
        catalogue: catalogues,
        
      })
    );
  });
  }, [userName]);


  return (
    <>
    <Header/>
    <Container>
        <ImgSlider/>
        <Catalogues/>
    </Container>
    </>
  )
}

const Container = styled.div`
position: relative;
min-height: calc(100vh);
overflow-x: hidden;
display: block;
padding: 0 calc(3.5vw + 5px);

&::-webkit-scrollbar {
    display: none;
}

&:after{
    background: url('/images/home_background.jpg') center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset:0px;
    opacity:1;
    z-index:-1;
}
`;
export default Home
