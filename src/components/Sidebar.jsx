import styles from './Sidebar.module.css'

export function Siderbar() {
    return (
        <aside className={styles.siderbar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1698308246064-e86c57c63782?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/albanogabriel.png" />

                <strong>Gabriel Albano</strong>
                <span>Front-end Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}