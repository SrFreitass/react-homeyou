import styles from './Subhome.module.css'
import designImg from '../../assets/images/design-img.png'

export function Subhome() {
    return (
        <section className={styles.sectionSubHome}>
            <img src={designImg} alt="" />

            <div className={styles.subHomeContainerCotent}>
                <div className={styles.subHomeTexts}>
                    <h2>Design Minimalista</h2>
                    <p>Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.</p>
                </div>
                <a href="#">Quero saber mais sobre os designs</a>
            </div>
        </section>
    )
}