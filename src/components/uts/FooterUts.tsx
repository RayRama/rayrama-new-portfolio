import { IcGithub, IcInstagram, IcLinkedIn } from "@assets/svg";
import styled from "styled-components";

const Footer = styled.footer`
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 5rem;
  padding-left: 5rem;

  color: white;
  background-color: #050038;
  border-top: 1px solid gray;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  gap: 3rem;
  cursor: pointer;
`;

const LinkContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftLink = styled.div`
  width: 50%;
  display: flex;
  padding-left: 5rem;

  @media (max-width: 768px) {
    padding-top: 2rem;
    width: 100%;
    padding-left: 0;
  }
`;

const RightLink = styled.div`
  width: 50%;
  display: flex;
  padding-left: 5rem;

  @media (max-width: 768px) {
    padding-top: 2rem;
    width: 100%;
    padding-left: 0;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export function FooterUts() {
  return (
    <Footer>
      <SocialMedia>
        <IcGithub />
        <IcInstagram />
        <IcLinkedIn />
      </SocialMedia>
      <LinkContainer>
        <LeftLink>
          <LinkList>
            <Link href="#">Contact</Link>
            <Link href="/about">About Me</Link>
            <Link href="#">Terms & Conditions</Link>
          </LinkList>
        </LeftLink>
        <RightLink>
          <LinkList>
            <Link href="#">Careers</Link>
            <Link href="#">Change country</Link>
            <Link href="#">FAQ</Link>
          </LinkList>
        </RightLink>
      </LinkContainer>
    </Footer>
  );
}
