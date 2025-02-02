import { Link } from 'react-router-dom'
import styles from './Header.module.css'
export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.cont__h}>
                <div className={styles.cont__header}>
                    <div className={styles.title}>
                        <Link to='/' className={styles.nav_link} onClick={() => localStorage.clear()}>
                            <h1>Practica Virtualizacion</h1>
                        </Link>
                    </div>
                    <nav className={styles.cont__nav__a + " " + styles.nav}>
                        <Link className={styles.nav__a} to="/" onClick={() => localStorage.clear()}>Iniciar Sesion</Link>
                        <Link className={styles.nav__a} to="virtual/singup" onClick={() => localStorage.clear()}>Registrarse</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}