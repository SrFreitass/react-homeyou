import styles from './Header.module.css'
import { HeartStraight, House, List, X, MagnifyingGlass, User } from 'phosphor-react'
import { useState } from 'react'

export function Header() {
        const [isOpen, setIsOpen] = useState(false)
        const toggleMenu = () => {
            setIsOpen(!isOpen)
        }

    return (
        <header>
            <div title='Logotipo' className={styles.logo}>
                <House className={styles.logoIcon} size={24}/>
                <strong>HOMEYOU</strong>
            </div>
            <nav className={isOpen ? [styles.menu] : [styles.active]}>
            <ul className={styles.navItems}>
                <li><a href="#">Início</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            <ul className={styles.navIcons}>
                <li>
                    <a href="#"><User size={20}/></a>        
                </li>
                <li>
                    <a href="#"><HeartStraight size={20}/></a>
                </li>

                <li>
                    <a href='#'><MagnifyingGlass size={20}/></a>
                </li>
            </ul>
            </nav>
            <span className={styles.iconMenu} onClick={toggleMenu}> 
                {isOpen ? <X size={32}/> : <List size={32}/>}
            </span>
        </header>
    )
}