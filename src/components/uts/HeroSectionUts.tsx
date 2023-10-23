import styled from "styled-components";

const linkGambar =
  "https://visaenvoy.com/wp-content/uploads/2022/04/Information-Technology-Sector.png";

const SectionContainer = styled.section`
  width: 100%;
  height: 25rem;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    height: 50rem;
    flex-direction: column-reverse;
  }
`;

const LeftRow = styled.div`
  width: 50%;
  height: 100%;
  padding: 5rem 8rem 5rem 8rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 100;
  }

  .action-div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .buy-btn {
    width: 7rem;
    height: 3rem;

    border-radius: 5px;

    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  .action-products {
    font-size: 16px;
    text-decoration: underline;
    margin-left: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 5rem 2rem 5rem 2rem;
  }
`;

const RightRow = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${linkGambar});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .mobile-img {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;

    .mobile-img {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
`;

export function HeroSectionUts() {
  return (
    <SectionContainer>
      <LeftRow>
        <div className="container">
          <h1>Bring technology is in your hands</h1>
          <p>
            This technology will bring new things and experiences to your
            business and company
          </p>
          <div className="action-div">
            <button className="buy-btn">Buy Now</button>
            <p className="action-products">See All Products</p>
          </div>
        </div>
      </LeftRow>
      <RightRow>
        <img src={linkGambar} alt="gambar" className="mobile-img" />
      </RightRow>
    </SectionContainer>
  );
}
