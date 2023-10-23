import React from "react";
import styled from "styled-components";
import DragonSin from "@assets/images/dragon-sin.webp";
import { IcMenu } from "@assets/svg";

const Header = styled.header`
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 5rem;
  padding-left: 5rem;

  background-color: #fff;
  border-bottom: 1px solid gray;
`;

const Logo = styled.img`
  width: 42px;
  height: 42px;
  filter: invert(100%);
`;

const ListMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  .mobile-menu {
    display: none;
  }

  @media (max-width: 768px) {
    .mobile-menu {
      display: flex;
      cursor: pointer;
    }
  }
`;

const ListItem = styled.li`
  margin: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ListLink = styled.a`
  text-decoration: none;
  color: black;
`;

export function HeaderUts() {
  const linkMenu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "mailto:rayramadita12@gmail.com",
    },
    {
      name: "About Me",
      link: "/about",
    },
    {
      name: "Docs",
      link: "https://docs.google.com/document/d/1fbmdJflTgXaEv3jD7U0Xhy8NRaaZR_eVkQxcoBXl_JI/edit?usp=sharing",
    },
  ];
  return (
    <Header>
      <Logo src={DragonSin} alt="logo" />
      <ListMenu>
        <div className="mobile-menu">
          <IcMenu width={32} height={32} />
        </div>
        {linkMenu.map((menu, index) => (
          <ListItem key={index}>
            <ListLink href={menu.link}>{menu.name}</ListLink>
          </ListItem>
        ))}
      </ListMenu>
    </Header>
  );
}
