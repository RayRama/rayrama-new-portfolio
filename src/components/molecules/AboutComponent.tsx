import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;

interface IAboutComponentProps {
  children: React.ReactNode;
}

export function AboutComponent({ children }: IAboutComponentProps) {
  return (
    <AboutContainer>
      <Container>{children}</Container>
    </AboutContainer>
  );
}
