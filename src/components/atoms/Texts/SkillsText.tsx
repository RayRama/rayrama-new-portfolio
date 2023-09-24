import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SkillsText = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.text};

  z-index: 1;
`;

const SkillsTextComponent = (props: any) => {
  return (
    <SkillsText to="/skills">
      <h2>Skills</h2>
    </SkillsText>
  );
};

export default SkillsTextComponent;
