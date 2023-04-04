import styled from 'styled-components';

export const ProfileWrap = styled.div`
width: 300px;
margin: 0 auto;
padding: 10px;
@media screen and (min-width: 768px) {
    width: 500px;
    padding: 30px;
  }
background-color: white;
border: 1px solid #dddddd;
border-radius: 8px;
`;
export const UserAvatarWrap = styled.div`
border-radius: 50%;
overflow: hidden;
width: 100%;
margin: 0 auto;
`;
export const UserDescription = styled.div`
padding-bottom: 20px;
border-bottom: 1px solid gray;
font-size: 24px;
text-align: center;
color: gray;
p.name {
  color: black;
}
`;
export const UserStats = styled.ul`
display: flex;
li {
  padding-top: 20px;
  flex-basis: calc(100% / 3);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
`;

export const UserStatsSpan = styled.span`
display: block;
flex-basis: 100%;
text-align: center;
color: ${props => props.quantity ? "black" : "gray"};
`