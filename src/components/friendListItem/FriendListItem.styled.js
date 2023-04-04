import styled from 'styled-components';

export const FriendLi = styled.li`
width: 145px;
padding: 10px;
display: flex;
gap: 10px;
align-items: center;
background-color: #ffffff;
border: 1px solid #dddddd;
border-radius: 6px;
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
