import styles from './Home.module.css'
import houseImage from '../../assets/images/home-img.png' 


export function Home() {
    return (
        <section className={styles.sectionHome}>
            <div className={styles.homeContainerContent}>
                <div className={styles.homeTexts}>
                    <h1>Ajudar você a encontrar o melhor conforto, é nossa prioridade.</h1>
                    <p>Encontre uma variedade de propriedades que combinam com você. 
                    Esqueça todas as dificuldades em encontrar uma residência</p>
                </div>

                <div className={styles.homeButtons}>
                <button>Entre em contato</button>
                    <a href="#">Mais sobre nós</a>
                </div>
            </div>

            <img src={houseImage} />
        </section>
    )
}