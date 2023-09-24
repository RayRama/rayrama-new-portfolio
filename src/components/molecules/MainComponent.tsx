import React from "react";
import styled from "styled-components";
import BgVideo from "../../assets/videos/bg-video.mp4";
import BgVideoPoster from "@assets/images/bg-video-poster.webp";
import { IntroComponent } from "./IntroComponent";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Warna hitam dengan opasitas 0.5 */
`;

interface IMainComponentProps {
  children: React.ReactNode;
  clicked: boolean;
}

const MainComponent = ({ children, clicked }: IMainComponentProps) => {
  return (
    <MainContainer>
      <video autoPlay muted loop poster={BgVideoPoster}>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <Overlay />
      <Container>{children}</Container>
      {clicked ? <IntroComponent /> : null}
    </MainContainer>
  );
};

export default MainComponent;
