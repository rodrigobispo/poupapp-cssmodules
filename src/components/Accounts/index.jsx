import { AccountItem } from '../AccountItem'
import { Button } from '../Button'
import { IconWallet } from '../icons'
import styles from './account.module.css'

export const Accounts = () => {

  const items = [
    { bank: "Caixa", balance: 1200 },
    { bank: "Santander", balance: 800 },
    { bank: "Itaú", balance: 1800000 },
    { bank: "Banco do Brasil", balance: 40 }
  ]

  return (
    <>
      <ul className={styles.list}>
        {items.map((accountItem, index) => {
          return (
            <li key={index}>
              <AccountItem item={accountItem} />
            </li>
          )
        })}
      </ul>
      <Button>
        <IconWallet /> Adicionar conta
      </Button>
    </>
  )
}