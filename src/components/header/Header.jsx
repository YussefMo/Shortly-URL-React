import illustrationWorking from '../../assets/images/illustration-working.svg'
import Box from '../UI/box/Box'
import './Header.css'

function Header() {
    return (
        <header>
            <Box className={'right'}>
                <h1>More than just shorter links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights on how your links are performing.
                </p>
                <button className="btn-standard">Get Started</button>
            </Box>
            <Box className={'left'}>
                <img src={illustrationWorking} alt="illustration-Working" />
            </Box>
        </header>
    )
}

export default Header