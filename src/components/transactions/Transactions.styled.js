import styled from 'styled-components';

export const TransactionTable = styled.table`
margin: 0 auto;
width: 320px;
@media screen and (min-width: 768px) {
    width: 700px;
}
text-align: center;
border: 1px solid #dddddd;
border-collapse: collapse;
`;

export const TableHead = styled.thead`
background-color: lightblue;
`;

export const TableRow = styled.tr`
display:flex;
width: 100%;
th, td {
  flex-basis: calc(100%/3);
  border: 1px solid #dddddd;
  padding: 5px 0 5px 0;
}
`;
export const TableTd = styled.td`
flex-basis: calc(100%/3);
  border: 1px solid #dddddd;
  padding: 5px 0 5px 0;
  background-color: ${(props) => props.amount ? "#EBECED" : "#FFFFFF"};
`;