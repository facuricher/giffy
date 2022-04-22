import styled from "styled-components";

export const GifsDiv = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-template-rows: masonry;
  grid-auto-flow: row dense;
  grid-gap: 6px 6px;
  gap: 6px 6px;
  align-items: center;
/*
  @media screen and (min-width: 37.5rem){
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-auto-rows: 150px;
  }

  @media screen and (min-width: 60rem){
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-auto-rows: 160px;
  }
  */
`