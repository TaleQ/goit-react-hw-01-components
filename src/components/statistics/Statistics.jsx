import PropTypes from "prop-types";
import { StatisticsWrap, StatisticsTitle, StatisticsList, StatisticsItem, StatsSpan } from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (<StatisticsWrap>
    {title && (<StatisticsTitle>{title}</StatisticsTitle>)}
    <StatisticsList count ={stats.length}>
      {stats.map(stat => (<StatisticsItem key={stat.id}>
      <StatsSpan>{stat.label}</StatsSpan>
      <StatsSpan  quantity>{stat.percentage}</StatsSpan>
    </StatisticsItem>))}
  </StatisticsList>
</StatisticsWrap>);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
}

export default Statistics;