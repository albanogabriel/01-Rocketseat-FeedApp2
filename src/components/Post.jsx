import styles from './Post.module.css'

export function Post() {
    return (
        <div>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img className={styles.avatar} src="https://github.com/albanogabriel.png" />
                        <div className={styles.authorInfo}>
                            <strong>Gabriel Albano</strong>
                            <span>Front-end Developer</span>
                        </div>

                        <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
                    </div>
                </header>

                <div className={styles.content}>
                    <p>Fala Galera 👏</p>
                    <p> acabei de subir mais um projeto no meu portfia. É um projeto que fiz no NLW Return, evento da Rocket</p>
                    <p>👉 <a href="">jane.design/doctorcare</a></p>
                    <p><a href="">#novoprojeto #nwl #rocketseat</a></p>
                </div>
            </article>
        </div>
    )
}