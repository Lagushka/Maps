import React, { FC, useRef } from "react";
import styled from 'styled-components'
import { Carousel } from "../../components/Carousel";

const Title = styled.h1`
    font-family: 'PT Serif', serif;
  `

const StyledMainPage = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 1200px;
  background-color: #ffffff;
  padding: 20px;
`

export const MainPage: FC = () => {
  const popularMapsRef = useRef<HTMLDivElement>(null)

  return (
    <StyledMainPage ref={popularMapsRef}>
      <Title>Maps</Title>
      <Carousel popularMapsRef={popularMapsRef} />
    </StyledMainPage>
  )
} 