import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IcPlane } from "@assets/svg";

const ContactButton = styled.button`
  position: absolute;
  padding: 0.5rem;

  height: 2.5rem;

  color: ${(props) => props.theme.text};

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.body};
  }

  top: 2rem;
  right: calc(1rem + 2vw);

  z-index: 1;
`;

const ContactButtonComponent = (props: any) => {
  return (
    <ContactButton>
      <NavLink to="mailto:rayramadita12@gmail.com" target="_blank">
        <IcPlane />
      </NavLink>
    </ContactButton>
  );
};

export default ContactButtonComponent;
