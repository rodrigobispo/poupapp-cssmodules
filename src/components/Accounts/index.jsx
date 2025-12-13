import styles from './account.module.css'
import { Button } from "../Button"
import { IconWallet } from '../icons'
import { List } from "../List"
import { ListItem } from "../ListItem"
import { AccountItem } from '../AccountItem'

export const Accounts = () => {
  const accounts = [
    { bank: "Anybank", balance: 1200 },
    { bank: "Bytebank", balance: 800 },
    { bank: "Switch Bank", balance: 1800 }
  ]

  return (
    <div className={styles.accounts}>
      <List>
        {accounts.map(ac => (
          <ListItem key={ac.bank}>
            <AccountItem account={ac} />
          </ListItem>
        ))}
      </List>
      <div className={styles.divider} />
      <div className={styles.actions}>
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </div>
  )
}