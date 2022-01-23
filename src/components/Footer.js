import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            Contact
        <Link to ='/'><p>Home</p></Link>
        <p>GitHub</p>
        <p>Linkedin</p>
        </footer>
    )
}

export default Footer