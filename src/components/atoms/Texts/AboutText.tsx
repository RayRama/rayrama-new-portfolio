import styled from "styled-components";
import { NavLink } from "react-router-dom";

const AboutText = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.text};

  z-index: 1;
`;

const AboutTextComponent = (props: any) => {
  return (
    <AboutText to="/about">
      <h2>About</h2>
    </AboutText>
  );
};

export default AboutTextComponent;
