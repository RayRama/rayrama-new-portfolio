import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 5rem 20rem 0 20rem;

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .form-section {
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 5rem 5rem 0rem 5rem;
    margin-top: 5rem;

    .container {
      flex-direction: column;
      align-items: center;
    }

    .form-section {
      width: 100%;
    }
  }
`;

const CustomInput = styled.input`
  height: 2rem;
  border: 1px solid #000;
  padding-left: 1rem;
`;

const CustomSelect = styled.select`
  height: 2rem;
  border: 1px solid #000;
  padding-left: 1rem;
`;

const CustomLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

export function FormSectionUts() {
  return (
    <SectionContainer>
      <div className="container">
        <div className="form-section">
          <CustomLabel htmlFor="name">Name</CustomLabel>
          <CustomInput id="name" type="text" placeholder="Your name" />
        </div>
        <div className="form-section">
          <CustomLabel htmlFor="email">Email</CustomLabel>
          <CustomInput id="email" type="email" placeholder="Your email" />
        </div>
        <div className="form-section">
          <CustomLabel htmlFor="role">Role</CustomLabel>
          <CustomSelect id="role">
            <option value="student">Designer</option>
            <option value="teacher">Programmer</option>
          </CustomSelect>
        </div>
      </div>
    </SectionContainer>
  );
}
