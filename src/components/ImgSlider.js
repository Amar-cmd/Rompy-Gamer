import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ImgSlider() {
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        pauseOnHover:true,
        slidesToScroll:1,
        swipeToSlide:true,
        autoplay:true,
    };

  return (
    

    <Container>
 <h1>upcoming games</h1>

        <Carousel {...settings}>

        <Wrap>
            <a>
            <img src='https://cdn.akamai.steamstatic.com/steam/apps/1817190/header.jpg?t=1666293248'/>
            </a>
        </Wrap>

        <Wrap>
            <a>

            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1496790/header.jpg?t=1666371936'/>
            </a>
        </Wrap>

        <Wrap>
            <a>
            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1656615305'/>
            </a>
        </Wrap>

        <Wrap>
            <a>
            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/752590/header.jpg?t=1666044174'/>
            </a>
        </Wrap>

        <Wrap>
            <a>
            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg?t=1666286264'/>
            </a>
        </Wrap>
            
        </Carousel>
       
    </Container>
  )
}

// const Carousel = styled(Slider)`
// /* border: 2px solid white; */
// margin-top:100px;
// width: 92vw;
// display: flex;
// align-items: center;
// justify-content: center;
// height:45vh;

// &::-webkit-scrollbar {
//     display: none;
// }

// & > button{
//     opacity:0;
//     height:100%;
//     width:5vw;
//     z-index:1;


    

//     &:hover{
//         opacity:1;
//         transition:opacity 0.2s ease-in 0s;
//     }
// }

//     ul li button{
//         &:before{
//             font-size:15px;
//             color:rgb(150,158,171);
//         }
//     }

//     li.slick-active button:before{
//         color: white;
//     }

//     .slick-list{
//         /* overflow: ; */
//     }

//     .slick-prev{
//         left:-75px;
//     }

//     .slick-next{
//         right:-75px;
//     }
// `;

// const Wrap = styled.div`
// /* border: 2px solid red; */
// justify-content: center;
// border-radius:4px;
// cursor:pointer;
// position:relative;
// height:100%;


// a{
//     border-radius:4px;
//     box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
//     rgb(0 0 0 / 73%) 0px 16px 10px -10px;
//     display:block;
//     padding:4px;

//     img{
//         width:91.25vw;
//         height:45vh;
//         object-fit: cover;
//         object-position: 10% 20%;
        
//     }
// }
// &:hover{
//     padding:0;
//     border:4px solid white;
//     transition-duration:200ms;
// }
// `;

const Container = styled.div`

margin-top: 50px;
/* border:2px solid red; */
width:100%;
height:50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

h1{
    text-align: center;
    margin-top: 20px;
    color: white;
    font-family: Poppins, san-serif;
    text-transform: capitalize;

    @media(max-width:768px){
        font-size: 18px;
    }
}

`;
const Carousel = styled(Slider)`
margin-top:20px;
width:90%;
justify-content: center;
align-items: center;
/* border: 2px solid red; */
object-position: center;

&::-webkit-scrollbar {
    display: none;
}

& > button{
    opacity:0;
    height:100%;
    width:5vw;
    z-index:1;

    

    &:hover{
        opacity:1;
        transition:opacity 0.2s ease-in 0s;
    }
}

    ul li button{
        &:before{
            font-size:15px;
            color:rgb(150,158,171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        /* overflow:initial; */
    }

    .slick-prev{
        left:-75px;
    }

    .slick-next{
        right:-75px;
    }
`;

const Wrap = styled.div`
border-radius:4px;
cursor:pointer;
position:relative;

a{
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display:block;
    padding:4px;

    img{
        width:100%;
        height:100%;
    }
}
&:hover{
    padding:0;
    border:4px solid white;
    transition-duration:200ms;
}
`;
export default ImgSlider
