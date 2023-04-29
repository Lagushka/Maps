import React from "react";
import styled from "styled-components";
import { API_URL, LAPTOP_WIDTH, TABLET_WIDTH } from "../utils/constants";
import { getSlideWidth } from "../utils/slides";
import { TopMapData } from "../utils/typing";

const slideWidth = getSlideWidth()

const StyledLinkedSlide = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${Math.floor(slideWidth * 0.8)}px;
  box-sizing: border-box;
  border-radius: ${Math.floor(slideWidth / 9)}px;
  padding: ${Math.floor(slideWidth / 20)}px;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    background-color: #f3f3f3;
  }
`

const Image = styled.img`
  border-radius: ${Math.floor(slideWidth / 12)}px;
  object-fit: none;
  width: ${Math.floor(slideWidth * 0.9)}px;
  height: ${Math.floor(slideWidth * 0.6)}px;
`

const MapName = styled.span`
  color: #313131;
  border: none;
  font-size: 12px;
  text-overflow: ellipsis;

  &:visited {
    color: inherit;
  }
  
  @media screen and (min-width: ${TABLET_WIDTH}px) {
    font-size: 16px;
  }

  @media screen and (min-width: ${LAPTOP_WIDTH}px) {
    font-size: 18px;
  }

`

export const LinkedSlide: React.FC<{map: TopMapData}> = ({map}) => {
  return (
    <StyledLinkedSlide href={`/map/${map.id}`}>
      <picture>
        <Image id={map.id.toString()} src={`${API_URL}/preview/${map.id}`} />
      </picture>
      <MapName>{map.name}</MapName>
    </StyledLinkedSlide>
  )
}