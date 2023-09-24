import { IcGithub, IcInstagram, IcLinkedIn } from "@svg/index";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.div`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          to="https://github.com/rayrama/"
          target="_blank"
        >
          <IcGithub />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          to="https://www.instagram.com/r.rama12/"
          target="_blank"
        >
          <IcInstagram />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          to="https://www.linkedin.com/in/rayramadita/"
          target="_blank"
        >
          <IcLinkedIn />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
