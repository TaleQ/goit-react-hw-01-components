import styled from 'styled-components';
import { StatsSpan } from '../Common.styled';

export const UserAvatarWrap = styled.div`
border-radius: 50%;
overflow: hidden;
width: 320px;
margin: 0 auto;
`;
export const UserDescription = styled.div`
margin-bottom: 10px;
font-size: 20px;
text-align: center;
color: gray;
p.name {
  color: black;
}
`;
export const UserStats = styled.ul`
display: flex;
li {
  flex-basis: calc(100% / 3);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
`;

export const UserStatsSpan = styled(StatsSpan)`
color: ${props => props.quantity ? "black" : "gray"};
`