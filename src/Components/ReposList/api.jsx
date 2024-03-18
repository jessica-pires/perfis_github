import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ApiRepos = ({ nomeUsuario })=> {

    const [repos, setrepos ]= useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(()=> {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(()=> {
                setEstaCarregando(false);
                setrepos(resJson);

            },3000)
            console.log(resJson)
        
        })
    }, [nomeUsuario])
        return (
            <div className="container">
                {estaCarregando ? (
                    <h2>Carregando....</h2>

                ) : (
                    <ul className={styles.list}>
                    {repos.map(repositorio => (
                        <li  className={styles.listItem} key={repositorio.id}>
                            <div className={styles.listName}> 
                                <b>Nome:</b> {repositorio.name}
                                < br />
                            </div>
                            <br />
                            <div className={styles.listLanguage}>
                                <b>Linguagem:</b>
                                    {repositorio.language}
                            </div>
                            <a className={styles.listLink} target="_blank" href= {repositorio.html_url}>Visitar no Github</a>
                        </li>
                    ))}
                
                </ul>
                )}
                
            </div>
    )
}

export default ApiRepos



