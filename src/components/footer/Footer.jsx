import './Footer.css'
import Logo from '../UI/nav-bar/nav-comp/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook , faTwitter , faPinterest , faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
            <section className='contain section2'>
                <h1>
                    Boost your links today
                </h1>
                <button className="btn-standard">
                    Get Started
                </button>
            </section>
            <footer>
                <div className="logo">
                    <Logo />
                </div>
                <div className="nav-features">
                    <h3>Features</h3>
                    <ul>
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branded Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                </div>
                <div className="nav-resources">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="nav-company">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="action-footer">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faPinterest} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="https://github.com/YussefMo" target="_blank">Youssef Mohammed</a>.
                </div>
            </footer>
        </>
    )
}

export default Footer