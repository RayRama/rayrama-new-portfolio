import { FeatureSectionUts } from "@components/uts/FeatureSectionUts";
import { FeedbackSectionUts } from "@components/uts/FeedbackSectionUts";
import { FooterUts } from "@components/uts/FooterUts";
import { FormSectionUts } from "@components/uts/FormSectionUts";
import { HeaderUts } from "@components/uts/HeaderUts";
import { HeroSectionUts } from "@components/uts/HeroSectionUts";
import { ProductSectionUts } from "@components/uts/ProductSectionUts";
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: #fffccc;
`;

export function Uts() {
  useEffect(() => {
    document.title = "UTS - Ray Ramadita";
  }, []);
  return (
    <Container>
      <HeaderUts />
      <HeroSectionUts />
      <FeatureSectionUts />
      <ProductSectionUts />
      <FormSectionUts />
      <FeedbackSectionUts />
      <FooterUts />
    </Container>
  );
}
