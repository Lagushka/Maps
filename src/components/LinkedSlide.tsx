import React from "react";
import styled from "styled-components";
import { API_URL } from "../utils/constants";
import { TopMapData } from "../utils/typing";

const StyledLinkedSlide = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 320px;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 20px;
  &:hover {
    background-color: #ffffff;
  }
`

const Image = styled.img.attrs<{ id: string }>(({ id }) => ({
  src: `${API_URL}/preview/${id}`
}))`
  border-radius: 30px;
  object-fit: none;
  width: 360px;
  height: 260px;
`

export const LinkedSlide: React.FC<{map: TopMapData}> = ({map}) => {
  return (
    <StyledLinkedSlide href={`/map/${map.id}`}>
      <picture>
        <Image id={map.id.toString()} />
      </picture>
      <span>{map.name}</span>
    </StyledLinkedSlide>
  )
}