import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './PortfolioContainer.module.css'

const PortfolioContainer = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.Info}>
                <div className={classes.About}>
                    <div className={classes.Title}>About me</div>
                    <div className={classes.aboutContent}>
                        Hi, I'm Jahid Hassan Shamim. passionate about building web APIs and database design. Currently,
                        I'm focusing on learningabout differnt tools and technologies like Web Framework, Design
                        pattern, Database design, Project management to jump start my professional journey with
                        consistent growth.
                    </div>
                </div>

                <ul className={classes.Contact}>
                    <div className={classes.Title}>Basic Info</div>
                    <li>
                        <FontAwesomeIcon icon={faGoogle} />
                        &#160; jahid.cseq@gmail.com
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        &#160;
                        <a href="https://github.com/jahidcs" target="blank">
                            github.com/jahidcs
                        </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} />
                        &#160;
                        <a href="https://linkedin.com/in/jahidcs" target="blank">
                            linkedin.com/in/jahidcs
                        </a>
                    </li>
                </ul>
            </div>
            <div className={classes.Professional}>
                <div className={classes.Part}>
                    <div>
                        <div className={classes.Title}>Work Experience</div>
                        <div className={classes.Content}>
                            <div>
                                <div className={classes.Designation}>Software Engineer Intern</div>
                                <div>April 2022 - August 2022</div>
                                <div className={classes.Details}>
                                    Worked on Doctor and Patient portal (Personal Profiling for doctor and patient) for
                                    managing appointments and Chambers. Designed the UI and Integrated all APIs based on
                                    requirements.
                                </div>
                            </div>
                            <div className={classes.linking}>
                                <a href="https://healthxbd.com/" target="blank">
                                    HEALTHx BD
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={classes.Title}>Projects</div>
                        <div className={classes.Content}>
                            <div>
                                <div className={classes.Designation}>User Authentication JWT</div>
                                <div className={classes.Details}>
                                    Management system authentication (sign up, sign in, sign out) system with Django
                                    Rest framework using JWT. Integrated MySQL database and AJAX used for API
                                    integration.
                                </div>
                            </div>
                            <div className={classes.linking}>
                                <a href="https://github.com/Jahid11186/authenticate-with-drf" target="blank">
                                    Project
                                </a>
                            </div>
                        </div>
                        <div className={classes.Content}>
                            <div>
                                <div className={classes.Designation}>Contact Managemt (CRUD)</div>
                                <div>
                                    Contact management system developed by Django Rest Framework with User
                                    Authentication functionality.
                                </div>
                            </div>
                            <div className={classes.linking}>
                                <a href="https://github.com/Jahid11186/contact-manager" target="blank">
                                    Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Part}>
                    <div>
                        <div className={classes.Title}>Skills</div>
                        <div className={classes.Skills}>
                            <li>Python, Django, Django Rest Framework</li>
                            <li>JavaScript, React</li>
                            <li>Object Oriented Programming </li>
                            <li>MySQL </li>
                            <li>Agile (Scrum)</li>
                        </div>
                    </div>
                    <div>
                        <div className={classes.Title}>Education</div>
                        <div className={classes.Edu}>
                            <div>
                                <div className={classes.Degree}>B.Sc in Computer Science and Engineering</div>
                                <div>
                                    Daffodil International University
                                    <br />
                                    April 2022 - August 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PortfolioContainer
