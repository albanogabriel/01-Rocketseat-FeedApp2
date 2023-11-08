import { Header } from "./components/Header"

import styles from "./App.module.css"

import './global.css'
import { Siderbar } from "./components/Sidebar"
import { Post } from "./components/Post"


function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Siderbar />
        
        <main>
          <Post author="Gabriel Albano" content="lorem lorem lorem ipsum " />
        </main>
      </div>
    </div>
  )
}

export default App
