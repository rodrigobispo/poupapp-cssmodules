import { IconBank } from '../icons'
import styles from './account-item.module.css'

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const AccountItem = ({ item }) => {

  return (
    <div className={styles.account}>
      <p className={styles.bank}>
        <IconBank />
        <strong>{item.bank}</strong>
      </p>

      <div className={styles.details}>
        <p><span className={styles.label}>Saldo</span></p>
        <p>{formatter.format(item.balance)}</p>
      </div>
    </div>
  )
}