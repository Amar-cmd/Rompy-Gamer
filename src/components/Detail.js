import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail(props) {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  document.title = `${detailData.title}`;

  useEffect(() => {
    db.collection("games")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No Such Data Exists. 😠");
        }
      })
      .catch((error) => {
        console.log("Error Getting Document 😞: ", error);
      });
  }, [id]);
  return (
    <Container>
      {detailData && (
        <>
          <Background>
            <img src={detailData.backgroundImg} alt={detailData.title} />
          </Background>

          <ContentMeta>
            <LeftSection>
              <Developers>{detailData.developer}</Developers>

              <SubTitle>
                <Genre>{detailData.genre}</Genre>
                <Rating>
                  <span>Ratings: </span>
                  {detailData.rating}
                </Rating>
              </SubTitle>

              <Features>{detailData.feature}</Features>
              <Description>{detailData.description}</Description>
            </LeftSection>

            <RightSection>
              <ImageTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
              </ImageTitle>

              <Controls>
                <a href={detailData.redirectedPage}>
                  <Watch>
                    {/* <img src='images/play-icon-black.png' alt='' /> */}
                    <span>Watch</span>
                  </Watch>
                </a>

                <a href="/home">
                  <Catalogue>
                    {/* <img src='images/play-icon-white.png' alt='' /> */}
                    <span>Catalogue</span>
                  </Catalogue>
                </a>
              </Controls>
            </RightSection>
          </ContentMeta>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  /* min-height:calc(1000vh+250px); */
  overflow-y: hidden;
  display: block;
  /* top:72px; */
  /* padding:0 calc(3.5vw + 5px); */
`;

const Background = styled.div`
  left: 0px;
  position: fixed;
  object-fit: cover;
  background-size: cover;
  background-position: top;
  right: 0px;
  top: 0px;
  z-index: -1;
  filter: brightness(60%);

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-position: center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    width: initial;
  }
`;

const ContentMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const LeftSection = styled.div`
  /* border: 2px solid red; */
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: end;
  padding-left: 100px;
  padding-bottom: 100px;
  flex-direction: column;

  @media (max-width: 1000px) {
    font-size: 14px;
    padding-left: 50px;
    padding-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    display: none;
  }

  @media (max-height: 768px) {
    /* display:none; */
  }
`;

const Developers = styled.div`
  /* border: 2px solid blue; */
  width: 80%;
  color: white;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  padding: 5px 0;
  letter-spacing: 1px;

  @media (max-width: 1000px) {
    font-size: 20px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const SubTitle = styled.div`
  /* border:2px solid blue; */
  padding: 10px 0;
  width: 80%;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
`;

const Genre = styled.div`
  font-size: 1.3rem;
  font-family: "Poppins";
  /* margin-bottom: 20px;   */

  @media (max-width: 1200px) {
    font-size: 16px;
    font-size: 1.2rem;
    /* width: 50%; */
  }

  @media (max-width: 1000px) {
    font-size: 14px;
    font-size: 1.1rem;
  }
`;

const Rating = styled(Genre)`
  padding-right: 30px;

  @media (max-width: 1000px) {
    font-size: 16px;
    display: none;
  }
`;

const Features = styled(Genre)`
  /* border: 2px solid blue; */
  width: 80%;
  color: white;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Description = styled.div`
  /* border:2px solid blue; */
  /* text-align: justify; */
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  width: 80%;
  font-family: "Poppins", sans-serif;
  font-weight: 200;

  @media (max-width: 1000px) {
    font-size: 15px;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }

  @media (max-height: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

const RightSection = styled.div`
  /* border: 2px solid red; */
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 14px;
    /* display:none; */
  }
`;

const ImageTitle = styled.div`
  /* border:2px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
  /* padding-right: 100px; */

  /* -webkit-box-pack: start; */
  /* margin:0px auto; */
  /* min-height:170px; */
  /* padding-bottom:25px; */

  @media (max-width: 768px) {
    font-size: 14px;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    padding-right: 0px;
    margin-top: 20px;
    padding-bottom: 150px;
  }

  @media (max-height: 400px) {
    font-size: 14px;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    padding-right: 0px;
    margin-top: 20px;
    /* padding-bottom: 150px; */
  }

  img {
    /* border:2px solid red; */
    /* backdrop-filter: blur(5px); */
    max-width: 400px;
    min-width: 200px;
    width: 35vw;
  }
`;

const Controls = styled.div`
  /* border:2px solid blue; */
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-flow: row wrap;

  width: 100%;
  height: 50%;
  margin: 24px 0px;
  padding-bottom: 30px;
  /* min-height:56px; */

  a {
    text-decoration: none;
  }

  @media (max-width: 1400px) {
    flex-flow: wrap;
  }
  @media (max-width: 768px) {
    flex-flow: row wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 20%;
  }
`;

const Watch = styled.button`
  font-size: 15px;
  /* margin:0px 50px; */
  padding: 0 24px;
  width: 300px;
  height: 56px;
  /* border-radius:10px; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: none;
  border: 1px solid white;

  /* border:2px solid red; */
  color: white;
  transition: 0.2s ease-in-out;

  img {
    width: 32px;
  }

  &:hover {
    background: white;
    color: black;
    transition: 0.2s ease-in-out;
    border: 1px solid rgb(249, 249, 249);
  }

  @media (max-width: 1400px) {
    width: 200px;
  }

  @media (max-width: 1000px) {
    height: 45px;
    width: 150px;
    font-size: 12px;
    margin: 15px 0;

    /* margin:0px 10px 0px 0px; */
    /* padding:0px 12px; */
  }

  @media (max-width: 768px) {
  }
`;

const Catalogue = styled(Watch)`
  background: none;
  border: 1px solid rgb(249, 249, 249);
  /* border: 2px solid red; */
  color: rgb(249, 249, 249);

  &:hover {
    color: black;
    background: white;
  }
`;

export default Detail;
