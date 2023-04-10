import React, { FC, useRef } from "react";
import styled from 'styled-components'
import { Carousel } from "../components/Carousel";
import { PageWrapper } from "../wrappers/PageWrapper";

const Title = styled.h1`
    font-family: 'PT Serif', serif;
  `

export const MainPage: FC = () => {
  const popularMapsRef = useRef<HTMLDivElement>(null)

  return (
    <PageWrapper ref={popularMapsRef}>
      <Title>Maps</Title>
      <Carousel popularMapsRef={popularMapsRef} />
    </PageWrapper>
  )
} 