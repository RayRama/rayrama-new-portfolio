import MainButtonComponent from "@components/atoms/Buttons/MainButton";
import ContactIcon from "@components/atoms/Icons/ContactIcon";
import LogoText from "@components/atoms/Icons/LogoText";
import SocialIcons from "@components/atoms/Icons/SocialIcons";
import BottomBarComponent from "@components/atoms/Other/BottomBar";
import { DarkDivComponent } from "@components/atoms/Other/DarkDiv";
import AboutTextComponent from "@components/atoms/Texts/AboutText";
import BlogTextComponent from "@components/atoms/Texts/BlogText";
import SkillsTextComponent from "@components/atoms/Texts/SkillsText";
import WorkTextComponent from "@components/atoms/Texts/WorkText";
import DragonComponent from "@components/molecules/DragonComponent";
import MainComponent from "@components/molecules/MainComponent";
import React from "react";

export interface IMainPageProps {}

export function MainPage(props: IMainPageProps) {
  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <MainComponent clicked={click}>
      <MainButtonComponent />
      <LogoText />
      <SocialIcons />

      <DarkDivComponent clicked={click} />
      <DragonComponent clicked={click} onClick={handleClick} />

      <ContactIcon />
      <BlogTextComponent />
      <WorkTextComponent />

      <BottomBarComponent>
        <AboutTextComponent />
        <SkillsTextComponent />
      </BottomBarComponent>
    </MainComponent>
  );
}
