import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Siderbar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/albanogabriel.png',
      name: 'Gabriel Albano',
      role: 'SCRUM MASTER / Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 👏,' },
      {
        type: 'paragraph',
        content: 'acabei de subir mais um projeto no meu portfia, É um projeto que fiz no NLW Return, evento da Rocket'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 👏,' },
      {
        type: 'paragraph',
        content: 'acabei de subir mais um projeto no meu portfia, É um projeto que fiz no NLW Return, evento da Rocket'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-10 19:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {/* Renderizar meu componente Post */}
          {posts.map((post) => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
          })}
        </main>
      </div>
    </div>
  )
}

export default App
