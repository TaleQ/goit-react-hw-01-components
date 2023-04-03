import styled from 'styled-components';

export const FriendLi = styled.li`
width: auto;
text-align: center;
img {
  margin: 0 auto;
}
`;

export const StatusSpan = styled.span`
margin-right: 5px;
display: inline-block;
width: 8px;
height: 8px;
border-radius: 4px;
background-color: ${({isOnline}) => isOnline ? "green" : "red"};
`

export const FriendName = styled.p`
display: inline-block;
`
