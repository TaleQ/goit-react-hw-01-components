import FriendListItem from '../friendListItem/FriendListItem';
import { FriendUl} from './FriendList.styled';


const FriendList = ({friends}) => {
  return (<FriendUl>
    <FriendListItem friends={friends} />
  </FriendUl>)
};

export default FriendList;