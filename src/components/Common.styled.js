import styled from "styled-components";

export const Wrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const SectionWrap = styled.section`
background-color: white;
border: 1px solid gray;
padding: 20px;
`;

export const StatsSpan = styled.span`
display: block;
flex-basis: 100%;
text-align: center;
`
