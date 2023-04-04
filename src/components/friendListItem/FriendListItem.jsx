import PropTypes from 'prop-types';
import { FriendLi, FriendName, StatusSpan } from './FriendListItem.styled' ;

const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <FriendLi key={friend.id}>
      <StatusSpan isOnline={friend.isOnline}></StatusSpan>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <FriendName>{friend.name}</FriendName>
    </FriendLi>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendListItem;
