import styles from './Budget.module.css'

export function Budget() {
    return (
        <section className={styles.budget}>
            <div className={styles.budgetTexts}>
            <h2>Orçamento</h2>
            <p>Interessado em entrar em contato com um de nossos profissionais?</p>
            </div>

            <button>Entre em contato</button>
        </section>
    )
}