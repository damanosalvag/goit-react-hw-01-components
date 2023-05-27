import user from '../data/user.json';
import data from '../data/data.json';
import { Profile } from './Perfil/index';
import { Statistics } from './Statistics/Statistics';
import styles from './Perfil/Perfil.module.css';


export const App = () => {
  return (
      <div className={styles["container"]}>
        <Profile {...user} />
        <Statistics title="Upload stats" stats={data}/>
      </div>
  );
};


