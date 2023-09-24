import styled from "styled-components";
import React from "react";

const BottomBar = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  z-index: 1;
`;

interface IBottomBarProps {
  children: React.ReactNode;
}

const BottomBarComponent = ({ children }: IBottomBarProps) => {
  return <BottomBar>{children}</BottomBar>;
};

export default BottomBarComponent;
