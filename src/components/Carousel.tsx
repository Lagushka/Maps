import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import 'pure-react-carousel/dist/react-carousel.es.css';

import { TopMapData } from "../utils/typing";
import { LinkedSlide } from "./LinkedSlide";
import { API_URL } from "../utils/constants";
import { getSlideWidth } from "../utils/slides";

const slideWidth = getSlideWidth()

const getNumberOfVisibleSlides: (width: number) => number = (width) => {
  return Math.floor(width / (slideWidth + Math.floor(slideWidth * 0.1)))
}

interface WrapperProps {
  popularMapsRef: React.RefObject<HTMLDivElement>;
}

const MostPopularMaps = styled.div<{visibleSlidesNumber: number}>`
  /* background-color: #f3f3f3; */
  border-radius: ${Math.floor(slideWidth * 0.1)}px;
  width: ${({visibleSlidesNumber}) => visibleSlidesNumber * slideWidth + Math.floor(slideWidth * 0.1)}px;
  height: ${Math.floor(slideWidth * 0.9)}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const SliderWrapper = styled.div<{visibleSlidesNumber: number}>`
  width: ${({visibleSlidesNumber}) => visibleSlidesNumber * slideWidth}px;
  height: ${Math.floor(slideWidth * 0.8)}px;
  position: relative;
`

const styledButton = css`
  background: #ffffff00;
  border: none;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: ${Math.floor(slideWidth * 0.04)}px;
  
  &:disabled {
    cursor: not-allowed;

    svg {
      fill: #8a8a8a;
    }
  }

  &:hover:not(:disabled) {
    background: #f3f3f3;
  }
`

const StyledButtonBack = styled(ButtonBack)`
  ${styledButton}
  left: -${Math.floor(slideWidth * 0.09)}px;
  transform: translate(-50%, -50%);
`

const StyledButtonNext = styled(ButtonNext)`
  ${styledButton}
  right: -${Math.floor(slideWidth * 0.09)}px;
  transform: translate(50%, -50%);
`

export const Carousel: React.FC<WrapperProps> = ({ popularMapsRef }) => {
  const [topInfo, setTopInfo] = useState<TopMapData[]>([])

  useEffect(() => {
    axios.get(`${API_URL}/top`)
    .then((responce) => {
      setTopInfo(responce.data)
    })
    .catch((err) => console.log(err))
    console.log(getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number))
  }, [])

  return (
    <MostPopularMaps visibleSlidesNumber={getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number)}>
      <CarouselProvider
        naturalSlideWidth={ getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number) * slideWidth }
        naturalSlideHeight={ getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number) * Math.floor(slideWidth * 0.9) }
        totalSlides={topInfo.length}
        visibleSlides={ getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number)}
      >
        <SliderWrapper visibleSlidesNumber={getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number)}>
          <Slider>
            {
              topInfo.map((curMap, index) => (
                <Slide index={index} style={{paddingBottom: Math.floor(slideWidth * 0.8)}} key={index}>
                  <LinkedSlide map={curMap} />
                </Slide>
              ))
            }
          </Slider>
          <StyledButtonBack>
            <svg xmlns="http://www.w3.org/2000/svg" 
              height="48" 
              viewBox="0 96 480 960" 
              width={Math.floor(slideWidth / 100 * 6)}
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"/>
            </svg>
          </StyledButtonBack>
          <StyledButtonNext>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="230 96 460 960"
            width={Math.floor(slideWidth / 100 * 6)}
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"/>
          </svg>
          </StyledButtonNext>
        </SliderWrapper>
      </CarouselProvider>
    </MostPopularMaps>
  )
}