import styled from "styled-components";

const linkGambar =
  "https://images.unsplash.com/photo-1534609146522-5d8de8a10058?auto=format&fit=crop&q=80&w=2070";

const SectionContainer = styled.section`
  width: 100%;
  height: 15rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    height: 30rem;
    flex-direction: column;
    display: flex;
  }
`;

const LeftRow = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding-right: 7rem;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    padding-bottom: 5rem;
    align-items: center;
  }
`;

const RightRow = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding-left: 7rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .product-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .demo-btn {
    width: 7rem;
    height: 3rem;

    border-radius: 5px;

    background-color: #000;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    align-items: center;

    .product-content {
      width: 100%;
      padding: 0 5rem 0 5rem;
    }
  }
`;

export function ProductSectionUts() {
  return (
    <SectionContainer>
      <LeftRow>
        <img
          src={linkGambar}
          alt="gambar"
          width={320}
          height={320}
          loading="lazy"
        />
      </LeftRow>
      <RightRow>
        <div className="product-content">
          <h1>Now, Set up and grow your company</h1>
          <p>
            We offer many products that optimize your company, setup now and
            grow up your business
          </p>
          <button className="demo-btn">Demo</button>
        </div>
      </RightRow>
    </SectionContainer>
  );
}
