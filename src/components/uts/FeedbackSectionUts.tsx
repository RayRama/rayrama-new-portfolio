import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 5rem 20rem 5rem 20rem;

  .message-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .checkbox-container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
  }

  .checkbox-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .submit-btn {
    width: 10rem;
    height: 3rem;
    background-color: #827e82;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 0 5rem 5rem 5rem;

    .message-container {
      flex-direction: column;
    }

    .checkbox-container {
      flex-direction: column;
    }
  }
`;

const CustomLabel = styled.label`
  font-size: 1rem;
`;

const CustomInput = styled.input`
  height: 5rem;
  border: 1px solid #000;
  padding-left: 1rem;
`;

const CustomCheckbox = styled.input`
  height: 1rem;
  width: 1rem;
  border: 1px solid #000;
  padding-left: 1rem;
`;

export function FeedbackSectionUts() {
  const checkboxItems = [
    {
      name: "Marketing",
    },
    {
      name: "News & Updates",
    },
    {
      name: "Product Updates",
    },
    {
      name: "None",
    },
  ];
  return (
    <SectionContainer>
      <div className="message-container">
        <CustomLabel htmlFor="Message">Message</CustomLabel>
        <CustomInput id="Message" type="text" placeholder="Your message" />
      </div>
      <div className="checkbox-container">
        <p>I choose to send information about:</p>
        {checkboxItems.map((item, index) => {
          return (
            <div className="checkbox-items" key={index}>
              <CustomCheckbox type="checkbox" name={item.name} />
              <CustomLabel htmlFor={item.name}>{item.name}</CustomLabel>
            </div>
          );
        })}
        <button className="submit-btn">Submit</button>
      </div>
    </SectionContainer>
  );
}
