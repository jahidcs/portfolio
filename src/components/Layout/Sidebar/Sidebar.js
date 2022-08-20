import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    const [info, setInfo] = useState({})
    const location = useLocation()

    useEffect(() => {
        let infoFunc = async () => {
            let infoFetch = await fetch('https://api.github.com/users/jahidcs', {
                headers: {
                    Accept: 'application/vnd.github.v3+json',
                },
                method: 'GET',
            })
            let infoJson = await infoFetch.json()

            if (infoFetch.ok) {
                setInfo(infoJson)
            }
        }
        try {
            infoFunc()
        } catch (e) {}
    }, [])

    return (
        <div className={classes.Bar}>
            <div className={classes.profilecard}>
                <div className={classes.Content}>
                    <div className={classes.profileImg}>
                        <img src={info.avatar_url} alt="pp" />
                    </div>

                    <div className={classes.Intro}>
                        <div className={classes.Name}>{info.name}</div>
                        <div className={classes.Designation}>Software Engineer</div>
                    </div>
                </div>

                <div className={classes.socialLink}>
                    <a href="https://github.com/jahidcs" className={classes.Icon}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/jahidcs" className={classes.Icon}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>

            <ul className={classes.Menus}>
                <li className={location.pathname === '/' ? classes.active : ''}>
                    <Link to="/">About Jahid</Link>
                </li>
                <li className={location.pathname === '/repos' ? classes.active : ''}>
                    <Link to="/repos">Repositories</Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar
