import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectCatalogue} from '../features/game/gameSlice';

function Catalogues() {

    const games = useSelector(selectCatalogue);

  return (
    <Container>
      <h1>Catalogue</h1>
      <Content>

            {
                games && games.map((game, key) => (
                    <Wrap key={key}>
                        {game.id}
                        <a href ={'/detail/' + game.id}>
                            <img src={game.cardImg} alt={game.title}/>
                        </a>
                    </Wrap>
                ))
            }
      </Content>
    </Container>
  )
}

const Container = styled.div`
    padding:0 0 26px;
    color:white;
    margin-top: 20px;

    &::-webkit-scrollbar {
    display: none;
}

h1{
    margin-top: 100px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    margin-bottom: 30px;
    text-align: center;

    @media(max-width:768px){
        font-size: 18px;
    }
}
`;
const Content = styled.div`
    display:grid;
    grid-gap:30px;
    margin: 0 50px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media(max-width:768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top:120%;
    border-radius:10px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    transition: all 250ms cubic-berier(0.25, 0.46, 0.45, 0.94) 0s;
    border:3px solid rgba(249,249,249,0.1);
    position:relative;

    img{
        inset:0px;
        display:block;
        height:100%;
        object-fit:cover;
        opacity:1;
        position:absolute;
        transition: opacity 500ms ease-in-out 0s;
        width:100%;
        z-index:1;
        top:0;
        transition: 0.2s ease-in-out;

        &:hover{
            box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
             rgb(0 0 0 / 73%) 0px 16px 10px -10px;
            transform:scale(1.05);
            transition: 0.2s ease-in-out;
            border-color: rgba(249,249,249,0.8);
        }
    }

`;

export default Catalogues
