import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    return (
    <table className={styles["transaction-history"]}>
        <thead className={styles["header"]}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
            <tbody className={styles["bodyTable"]}>
                {items.map(item => {  
                    return <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>   
                })}
        </tbody>
    </table>
)
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
  ).isRequired
};