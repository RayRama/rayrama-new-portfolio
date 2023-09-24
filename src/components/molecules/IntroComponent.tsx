import styled from "styled-components";
import Ray from "@assets/images/Ray.png";

interface IIntroComponentProps {}

const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.text};

  width: 65vw;
  height: 55vh;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  background: linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.text};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  // justify-content: center;
  // align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
  }

  .pic-profile {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 100%;
    height: auto;
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.text};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: grey;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

export function IntroComponent(props: IIntroComponentProps) {
  return (
    <Box>
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>Im Ray</h3>
          <h6>Full-Stack Developer</h6>
        </Text>
      </SubBox>
      <SubBox>
        <div>
          <img src={Ray} alt="Ray" className="pic-profile" />
        </div>
      </SubBox>
    </Box>
  );
}
