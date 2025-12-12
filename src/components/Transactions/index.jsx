import { Button } from "../Button"
import { IconCurrency } from "../icons"
import { TransactionItem } from "../TransactionItem"
import styles from "./transactions.module.css"

export const Transactions = () => {

  const items = [
    {
      "description": "Abastecimento",
      "value": -50,
      "date": '2024-09-18T00:00:00-03:00'
    },
    {
      "description": "iFood",
      "value": -45,
      "date": '2024-09-22T00:00:00-03:00'
    },
    {
      "description": "Freela",
      "value": 1500,
      "date": '2024-10-05T00:00:00-03:00'
    },
    {
      "description": "Magazine Luiza",
      "value": -300,
      "date": '2024-10-05T00:00:00-03:00'
    },
  ]

  return (
    <>
      <ul className={styles.list}>
        {items.map((transactionItem, index) => {
          return (
            <li key={index}>
              <TransactionItem item={transactionItem} />
            </li>
          )
        })}
      </ul>
      <Button>
        <IconCurrency /> Adicionar transação
      </Button>
    </>
  )
}