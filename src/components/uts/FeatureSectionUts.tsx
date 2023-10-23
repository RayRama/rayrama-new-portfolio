import { IcKeyboard, IcPlane } from "@assets/svg";
import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  height: 15rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: row;

  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    gap: 0.5rem;
  }

  .description {
    color: gray;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    height: 30rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

const LeftRow = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightRow = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 0.5rem
    font-weight: 100
  }
`;

export function FeatureSectionUts() {
  return (
    <SectionContainer>
      <LeftRow>
        <div className="container">
          <IcKeyboard height={80} width={80} />
          <p>Easy to implement</p>
          <p className="description">
            Easy to implement in your company with powerful platform
          </p>
        </div>
      </LeftRow>
      <RightRow>
        <div className="container">
          <IcPlane height={80} width={80} />
          <p>Optimize systems</p>
          <p className="description">More than company using this products</p>
        </div>
      </RightRow>
    </SectionContainer>
  );
}
