import { IcPlane } from "@assets/svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Icon = styled.div`
  position: absolute;
  padding: 0.5rem;

  height: 2.5rem;

  color: ${(props) => props.theme.text};

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  top: 2rem;
  right: calc(1rem + 2vw);

  z-index: 1;
`;

const ContactIcon = () => {
  return (
    <Icon>
      <NavLink to="mailto:rayramadita12@gmail.com" target="_blank">
        <IcPlane />
      </NavLink>
    </Icon>
  );
};

export default ContactIcon;
