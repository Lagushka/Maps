import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";

const StyledMainPage = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 1920px;
  background-color: #ffffff;
`

export const PageWrapper = forwardRef<HTMLDivElement, { children: ReactNode }>((props, ref) => (
  <StyledMainPage ref={ref}>
    {props.children}
  </StyledMainPage>
))

PageWrapper.displayName = 'Page Wrapper'