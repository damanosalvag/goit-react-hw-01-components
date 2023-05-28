import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function colorRandom() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


export const Statistics = ({ title, stats }) => {
    return (<section className={styles['statistics']}>
        <h2 className={styles["title"]}>{title}</h2>
        <ul className={styles["stat-list"]}>
            {stats.map(stat => { 
                const randomColor = colorRandom();
                return stat.id <= "id-4" &&
                <li className={styles["item"]} key={stat.id} style={{ backgroundColor: randomColor }}>
                    <span className={styles["label"]}>{ stat.label }</span>
                    <span className={styles["percentage"]}>{ stat.percentage }%</span>
                </li>    
            })}
        </ul>
    </section>)
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf( PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }).isRequired)
};