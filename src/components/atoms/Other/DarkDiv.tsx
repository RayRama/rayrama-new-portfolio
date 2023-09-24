import styled from "styled-components";

interface IDarkDivProps {
  clicked: boolean;
}

const DarkDiv = styled.div<IDarkDivProps>`
  background-color: rgba(0, 0, 0, 0.7);

  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.clicked ? "50%" : "0")};
  height: ${(props) => (props.clicked ? "100%" : "0")};
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: ${(props) => (props.clicked ? "100%" : "0")};
    height: ${(props) => (props.clicked ? "50%" : "0")};
    right: 0;
  }

  transition: height 0.5s ease, width 1s ease 0.5s;
`;

export function DarkDivComponent({ clicked }: IDarkDivProps) {
  return <DarkDiv clicked={clicked}></DarkDiv>;
}
