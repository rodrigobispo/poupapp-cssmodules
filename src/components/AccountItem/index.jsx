import { IconBank } from '../icons'
import styles from './account-item.module.css'

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const AccountItem = ({ item }) => {

  return (
    <div className={styles.account}>
      <div className={styles.details}>
        <p className={styles.bank}><IconBank /> {item.bank}</p>
        <div className={styles.balance}>
          <span className={styles.label}>Saldo</span>
          <span className={styles.value}>{formatter.format(item.balance)}</span>
        </div>
      </div>
    </div>
  )
}