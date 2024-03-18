
import { useState } from "react"
import Perfil from "./Components/Perfil"
import ApiRepos from "./Components/ReposList/api"



function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario= {nomeUsuario}/>
          <ApiRepos nomeUsuario={nomeUsuario}/>
        </>
      ) }
    </>
  )
}

export default App
