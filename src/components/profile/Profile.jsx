import PropTypes from "prop-types";
import { ProfileWrap, UserAvatarWrap, UserDescription, UserStats, UserStatsSpan } from "./Profile.styled";

const Profile = ({ user }) => {
  const { username, tag, location, avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats } = user;
  return (<ProfileWrap>
    <UserDescription>
      <UserAvatarWrap>
        <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      </UserAvatarWrap>
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </UserDescription>

    <UserStats>
      <li>
        <UserStatsSpan>Followers</UserStatsSpan>
        <UserStatsSpan quantity>{stats.followers}</UserStatsSpan>
      </li>
      <li>
        <UserStatsSpan>Views</UserStatsSpan>
        <UserStatsSpan quantity>{stats.views}</UserStatsSpan>
      </li>
      <li>
        <UserStatsSpan>Likes</UserStatsSpan>
        <UserStatsSpan quantity>{stats.likes}</UserStatsSpan>
      </li>
    </UserStats>
  </ProfileWrap>)
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};

export default Profile;