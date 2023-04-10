import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import 'pure-react-carousel/dist/react-carousel.es.css';

import { mapData } from "../utils/typing";
import { LinkedSlide } from "./LinkedSlide";
import { API_URL } from "../utils/constants";

const getNumberOfVisibleSlides: (width: number) => number = (width) => {
  return Math.floor(width / 500)
}

interface WrapperProps {
  popularMapsRef: React.RefObject<HTMLDivElement>;
}

const MostPopularMaps = styled.div<{visibleSlidesNumber: number}>`
  background-color: #f3f3f3;
  border-radius: 40px;
  width: ${({visibleSlidesNumber}) => visibleSlidesNumber * 400 + 150}px;
  height: 360px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const SliderWrapper = styled.div<{visibleSlidesNumber: number}>`
  width: ${({visibleSlidesNumber}) => visibleSlidesNumber * 400}px;
  height: 320px;
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
  
  &:disabled {
    svg {
      fill: #8a8a8a;
    }
  }
`

const StyledButtonBack = styled(ButtonBack)`
  ${styledButton}
  left: -33px;
  transform: translate(-20px, -50%);
`

const StyledButtonNext = styled(ButtonNext)`
  ${styledButton}
  right: -33px;
  transform: translate(20px, -50%);
`

export const Carousel: React.FC<WrapperProps> = ({ popularMapsRef }) => {
  const [topInfo, setTopInfo] = useState<mapData[]>([])

  useEffect(() => {
    axios.get(`${API_URL}/top`)
    .then((responce) => {
      setTopInfo(responce.data)
    })
    .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    console.log(popularMapsRef.current ? getNumberOfVisibleSlides(popularMapsRef.current.offsetWidth) * 400 : 400)
  }, [])

  return (
    <MostPopularMaps visibleSlidesNumber={getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number)}>
      <CarouselProvider
        naturalSlideWidth={ getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number) * 400 + 150 }
        naturalSlideHeight={ getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number) * 340 }
        totalSlides={topInfo.length}
        visibleSlides={ getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number)}
      >
        <SliderWrapper visibleSlidesNumber={getNumberOfVisibleSlides(popularMapsRef.current?.offsetWidth as number)}>
          <Slider>
            {
              topInfo.map((curMap, index) => (
                <Slide index={index} style={{paddingBottom: "320px"}} key={index}>
                  <LinkedSlide map={curMap} />
                </Slide>
              ))
            }
          </Slider>
          <StyledButtonBack>
            <svg xmlns="http://www.w3.org/2000/svg" 
              height="48" 
              viewBox="0 96 480 960" 
              width="24"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"/>
            </svg>
          </StyledButtonBack>
          <StyledButtonNext>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="230 96 460 960"
            width="24"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"/>
          </svg>
          </StyledButtonNext>
        </SliderWrapper>
      </CarouselProvider>
    </MostPopularMaps>
  )
}