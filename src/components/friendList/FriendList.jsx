import FriendListItem from '../friendListItem/FriendListItem';
import { SectionWrap } from '../Common.styled';
import { FriendUl} from './FriendList.styled';


const FriendList = ({friends}) => {
  return (<SectionWrap>
  <FriendUl>
    <FriendListItem friends={friends} />
  </FriendUl>
  </SectionWrap>)
};

export default FriendList;