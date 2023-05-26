import user from '../data/user.json';
import {Profile} from './Perfil/index'

export const App = () => {
  return (
    <div className="container">
      <Profile {...user} />
    </div>
  );
};


