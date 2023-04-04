import PropTypes from "prop-types";
import { TransactionTable, TableHead ,TableRow, TableTd } from "./Transactions.styled";

const TransactionHistory = ({ items }) => {
  return (<TransactionTable>
  <TableHead>
    <TableRow>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TableRow>
  </TableHead>
    <tbody>
      {items.map(item => (<TableRow key={item.id}>
      <TableTd>{item.type}</TableTd>
      <TableTd amount>{item.amount}</TableTd>
      <TableTd>{item.currency}</TableTd>
    </TableRow>))}
  </tbody>
</TransactionTable>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string)
  ).isRequired,
}

export default TransactionHistory;