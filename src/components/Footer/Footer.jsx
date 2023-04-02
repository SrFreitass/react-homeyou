import styles from './Footer.module.css'
import { House } from 'phosphor-react'


export function Footer() {
    return (
        <footer>
            <div title='Logotipo' className={styles.logo}>
                <House className={styles.logoIcon} size={24}/>
            </div>

            <ul>
              <h4>Produtos</h4>
              <li><a href='#'>Mobilia</a></li>
              <li><a href='#'>Segurança</a></li>
              <li><a href='#'>Design Interior</a></li>
            </ul>

            <ul>
                <h4>Mais Informações</h4>
                <li><a href='#'>Contrato</a></li>
                <li><a href='#'>Sobre nós</a></li>
                <li><a href='#'>Termos e Condições</a></li>
            </ul>

            <ul>
                <h4>Rede Sociais</h4>
                <li><a href='#'>Pinterest</a></li>
                <li><a href='#'>Facebook</a></li>
                <li><a href='#'>Instagram</a></li>
            </ul>
        </footer>
    )
}