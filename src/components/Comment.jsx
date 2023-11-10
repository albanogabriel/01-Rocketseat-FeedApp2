import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            
            <img src="https://github.com/albanogabriel.png" alt="" />

            <div className={styles.commentBox}>
                <header>
                    <section>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Albano</strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                        
                    </section>
                    <p>Muito bom Gabriel, parabéns</p>
                </header>
            </div>

            <footer>
               <button>
                <ThumbsUp />
                Aplaudir <span>23</span>
               </button>
            </footer>
        </div>
    )
}