import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
    return (
        <div>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                       <Avatar src="https://github.com/albanogabriel.png"/>
                        <div className={styles.authorInfo}>
                            <strong>Gabriel Albano</strong>
                            <span>Front-end Developer</span>
                        </div>
                    </div>

                    <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
                </header>

                <div className={styles.content}>
                    <p>Fala Galera 👏</p>
                    <p> acabei de subir mais um projeto no meu portfia. É um projeto que fiz no NLW Return, evento da Rocket</p>
                    <p><a href="">jane.design/doctorcare</a></p>
                    <p>
                        <a href="">#novoprojeto</a>{' '}
                        <a href="">#nwl</a>{' '}
                        <a href="">#rocketseat</a>{''}
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixa seu feedback</strong>
                    <textarea placeholder="deixe um comentário"/>

                    <footer>
                        <button type="submit">Publicar</button>
                    </footer>
                </form>

                <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
                               
            </article>
        </div>
    )
}