import { IcHome } from "@assets/svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: transparent;
  color: ${(props) => props.theme.text};
  padding: 0.3rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.text};
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const MainButtonComponent = (props: any) => {
  return (
    <MainButton>
      <NavLink to="/">
        <IcHome />
      </NavLink>
    </MainButton>
  );
};

export default MainButtonComponent;
