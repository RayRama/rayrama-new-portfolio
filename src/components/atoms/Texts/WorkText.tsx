import styled from "styled-components";
import { NavLink } from "react-router-dom";

const WorkText = styled(NavLink)`
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);

  @media (max-width: 768px) {
    left: calc(2rem + 2vw);
  }

  transform: translate(-50%, -50%) rotate(-90deg);

  text-decoration: none;
  color: ${(props) => props.theme.text};

  z-index: 1;
`;

const WorkTextComponent = (props: any) => {
  return (
    <WorkText to="/work">
      <h2>Work</h2>
    </WorkText>
  );
};

export default WorkTextComponent;
