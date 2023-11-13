import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

// O que vamos precisar ?
// author: { avatar_Url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/albanogabriel.png",
            name: "Gabriel Albano",
            role: "SCRUM MASTER / Front-end Developer"
        },
        content: [
            { type: paragraph, content: 'Fala Galera 👏,' },
            { type: paragraph, content: 'acabei de subir mais um projeto no meu portfia, É um projeto que fiz no NLW Return, evento da Rocket'},
            { type: link, content: '<a href="">jane.design/doctorcare</a>' }
        ],
        publishedAt: new Date('2022-05-03 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "CTO @rocketseat"
        },
        content: [
            { type: paragraph, content: 'Fala Galera 👏,' },
            { type: paragraph, content: 'acabei de subir mais um projeto no meu portfia, É um projeto que fiz no NLW Return, evento da Rocket'},
            { type: link, content: '<a href="">jane.design/doctorcare</a>' }
        ],
        publishedAt: new Date('2022-05-03 20:00:00'),
    }
]

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