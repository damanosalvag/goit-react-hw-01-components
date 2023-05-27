import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { Profile } from './Perfil/index';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import styles from './Perfil/Perfil.module.css';


export const App = () => {
  return (
    <div className={styles["container"]}>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};


