
import { useState } from "react"
import Perfil from "./Components/Perfil"
import ApiRepos from "./Components/ReposList/api"
import styles from "./Components/ReposList/ReposList.module.css"



function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <div className="container">
        <label className={styles.label} >Digite o nome do perfil</label>
        <input className={styles.input} type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
        {nomeUsuario.length > 4 && (
          <>
            <Perfil nomeUsuario= {nomeUsuario}/>
            <ApiRepos nomeUsuario={nomeUsuario}/>
          </>
      ) }
    </div>
  )
}

export default App
