import { useEffect, useState } from 'react'
import classes from './Repository.module.css'

const Repository = () => {
    const [repos, setRepos] = useState({})

    useEffect(() => {
        let infoFunc = async () => {
            let infoFetch = await fetch('https://api.github.com/users/jahidcs/repos', {
                headers: {
                    Accept: 'application/vnd.github.v3+json',
                },
                method: 'GET',
            })
            let infoJson = await infoFetch.json()

            if (infoFetch.ok) {
                setRepos(infoJson)
            }
        }
        try {
            infoFunc()
        } catch (e) {}
    }, [])

    let data = Array.from(repos)

    return (
        <div className={classes.Container}>
            <div>
                {data.map((repo, index) => {
                    return (
                        <div key={index}>
                            <p>
                                {repo.name} ----
                                {repo.html_url}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Repository
