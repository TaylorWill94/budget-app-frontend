import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            Contact
        <Link to ='/'><p>Home</p></Link>
        <p>GitHub</p>
        <p>Linkedin</p>
        </div>
    )
}

export default Footer