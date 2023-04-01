import styles from './Gallery.module.css'
import galleryImage1 from '../../assets/images/gallery-image1.png' 
import galleryImage2 from '../../assets/images/gallery-image2.png' 
import galleryImage3 from '../../assets/images/gallery-image3.png' 

export function Gallery() {
    return (
        <section className={styles.gallery}>
            <div className={styles.galleryTexts}>
                <h2>Galeria</h2>
                <p>Se você está entediado com a aparência da decoração 
                de interiores da casa comuns, trabalhamos com designs 
                diferentes e inovadores.</p>
            </div>

            <div className={styles.galleryImages}>
                <img 
                src={galleryImage1}
                alt="" 
                />

                <img 
                src={galleryImage2}
                alt="" 
                />


                <img 
                src={galleryImage3}
                alt="" 
            />
            </div>
        </section>
    )
}