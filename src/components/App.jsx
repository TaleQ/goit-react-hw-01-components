import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'

import { Wrapper } from './Common.styled';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactions/TransactionHistory';


const App = () => {
  return (
    <Wrapper>
      <Profile
        user={user}
      />
      <Statistics 
        title="Upload statistics"
        stats={statistics}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
};

export default App;
