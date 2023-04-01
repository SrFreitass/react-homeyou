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
              <li>Mobilia</li>
              <li>Segurança</li>
              <li>Design Interior</li>
            </ul>

            <ul>
                <h4>Mais Informações</h4>
                <li>Contrato</li>
                <li>Sobre nós</li>
                <li>Termos e Condições</li>
            </ul>

            <ul>
                <h4>Rede Sociais</h4>
                <li>Pinterest</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
        </footer>
    )
}