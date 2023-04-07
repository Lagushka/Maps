import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
  height: fit-content;
  background-color: #f3f3f3;
  border-radius: 40px;
  width: ${({visibleSlidesNumber}) => visibleSlidesNumber * 400 + 150}px;
  height: fit-content;
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
        <div style={{position: "relative"}}>
          <Slider>
            {
              topInfo.map((curMap, index) => (
                <Slide index={index} key={index}>
                  <LinkedSlide map={curMap} />
                </Slide>
              ))
            }
          </Slider>
          <ButtonBack style={{position: "absolute", top: "50%", left: "10px"}}>{"<"}</ButtonBack>
          <ButtonNext style={{position: "absolute"}}>{">"}</ButtonNext>
        </div>
      </CarouselProvider>
    </MostPopularMaps>
  )
}