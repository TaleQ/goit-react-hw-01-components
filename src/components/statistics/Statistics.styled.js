import styled from 'styled-components';

export const StatisticsTitle = styled.h2`
margin-bottom: 15px;
text-align: center;
font-size: 20px;
`;

export const StatisticsList = styled.ul`
display: flex;
justify-content: center;
border: 0.5px solid gray;
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