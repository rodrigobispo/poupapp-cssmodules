import styles from './aside.module.css'
import logo from '../../assets/logo.svg'

export function Aside() {
  return (
    <aside className={styles.aside}>
      <img src={logo} alt="" />
      <footer className={styles.footer}>
        Estudo e prática feitos por instrução na Alura. Projeto sem fins comerciais.
      </footer>
    </aside>
  )
}