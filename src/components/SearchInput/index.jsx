import styles from './search-input.module.css'
import { IconSearch } from '../icons/index';

export const SearchInput = (props) => {

  return (
    <div className={styles.container}>
      <IconSearch />
      <input className={styles.input} {...props} />
    </div>
  )
}