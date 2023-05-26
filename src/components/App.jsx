import user from '../data/user.json';
import { Profile } from './Perfil/index';
import styles from './Perfil/Perfil.module.css';


export const App = () => {
  return (
    <div className={styles["container"]}>
      <Profile {...user} />
    </div>
  );
};


