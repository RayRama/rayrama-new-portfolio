import styled from "styled-components";
import DragonSin from "@assets/images/dragon-sin.webp";
import React from "react";

interface IDragonComponentProps {
  clicked: boolean;
  onClick: () => void;
}

const Center = styled.button<IDragonComponentProps>`
  position: absolute;
  top: ${(props) => (props.clicked ? "85%" : "50%")};
  left: ${(props) => (props.clicked ? "92%" : "50%")};
  transform: translate(-50%, -50%);

  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1.5s ease;

  & > *:first-child {
    animation: rotate 10s linear infinite;
  }

  & > *:last-child {
    display: ${(props) => (props.clicked ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  img {
    width: ${(props) => (props.clicked ? "90px" : "150px")};
    height: ${(props) => (props.clicked ? "90px" : "150px")};
  }

  @media screen and (max-width: 768px) {
    img {
      width: ${(props) => (props.clicked ? "50px" : "150px")};
      height: ${(props) => (props.clicked ? "50px" : "150px")};
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const DragonComponent = ({ clicked, onClick }: IDragonComponentProps) => {
  return (
    <Center clicked={clicked} onClick={onClick}>
      <img
        src={DragonSin}
        alt="dragon-sin"
        // width={clicked ? 90 : 150}
        // height={clicked ? 90 : 150}
      />
      <h3>Click Me</h3>
    </Center>
  );
};

export default DragonComponent;
