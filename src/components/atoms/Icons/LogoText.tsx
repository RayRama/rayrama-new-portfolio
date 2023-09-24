import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: ${(props) => props.theme.text};

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoText = () => {
  return <Logo>RR</Logo>;
};

export default LogoText;
