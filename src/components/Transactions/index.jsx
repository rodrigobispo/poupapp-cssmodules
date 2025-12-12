import { Button } from "../Button"
import { IconCurrency } from "../icons"
import { TransactionItem } from "../TransactionItem"

export const Transactions = () => {

  const items = [
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
      <ul>
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