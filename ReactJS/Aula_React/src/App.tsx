import { Header }from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './app.module.css'
function App() {

  return (
   <>
   <Header />

   <div className={styles.wrapper}>
    <Sidebar />
    <main>post</main>
   </div>
   </>
  )
}

export default App
