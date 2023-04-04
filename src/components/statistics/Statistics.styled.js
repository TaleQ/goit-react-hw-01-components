import styled from 'styled-components';

export const StatisticsWrap = styled.section`
width: 320px;
@media screen and (min-width: 768px) {
    width: 600px;
  };
@media screen and (min-width: 1280px) {
    width: 700px;
  };
margin: 0 auto;
padding-top: 15px;
background-color: #FFFFFF;
border: 1px solid #dddddd;
`

export const StatisticsTitle = styled.h2`
margin-bottom: 15px;
text-align: center;
font-size: 24px;
`;

export const StatisticsList = styled.ul`
display: flex;
justify-content: center;
border: 0.5px solid #dddddd;
`;

export const StatisticsItem = styled.li`
padding: 10px;
flex-basis: calc(100%/5);
background-color: ${() => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}};
color: #FFFFFF;
`

export const StatsSpan = styled.span`
display: block;
flex-basis: 100%;
text-align: center;
`;