import styled from "styled-components";
export interface IMaintenanceComponentProps {}

const MaintenanceContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 2rem;
  width: 100%;
`;

export function MaintenanceComponent(props: IMaintenanceComponentProps) {
  return (
    <MaintenanceContainer>
      <Container>
        <h1>Under Maintenance</h1>
        <p>Sorry, this page is under maintenance. Please come back later.</p>
      </Container>
    </MaintenanceContainer>
  );
}
