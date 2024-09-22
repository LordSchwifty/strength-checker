import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()

    const handleHeaderClick = ()  => {
        navigate('/')
    }
    return (
        <div className='header-section' onClick={handleHeaderClick}>
        <h1>Dynasty Fantasy Rankings Checker</h1>
        </div>
    )
}

export default Header;