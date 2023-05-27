import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles["friend-list"]}>
      {friends.map((friend, index) => (
        <FriendListItem key={index} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  ).isRequired
};

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles["item"]}>
        <span className={`${styles["status"]} ${isOnline ? styles['online'] : styles['offline']}`}> </span>
        <figure className={styles["avatar-container"]}>
            <img className={styles["avatar"]} src={avatar} alt="User avatar" width="48" />     
        </figure>
      <p className={styles["name"]}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};