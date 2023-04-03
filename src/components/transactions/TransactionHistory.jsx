import PropTypes from "prop-types";
import { SectionWrap } from "../Common.styled";
import { TransactionTable, TableHead ,TableRow, AmountTd } from "./Transactions.styled";

const TransactionHistory = ({ items }) => {
  return (<SectionWrap><TransactionTable>
  <TableHead>
    <TableRow>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TableRow>
  </TableHead>
    <tbody>
      {items.map(item => (<TableRow key={item.id}>
      <td>{item.type}</td>
      <AmountTd>{item.amount}</AmountTd>
      <td>{item.currency}</td>
    </TableRow>))}
  </tbody>
</TransactionTable></SectionWrap>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string)
  ).isRequired,
}

export default TransactionHistory;