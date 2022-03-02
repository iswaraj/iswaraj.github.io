import React from 'react';
import './NavBar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';
import menubtn from '../../assets/menu_button.png';
import crossbtn from '../../assets/cross-button.png';

class NavBar extends React.Component {
    render() {
        const { location } = this.props;

        const homeClass = location.pathname === '/' ? 'active-item' : '';
        const aboutClass = location.pathname === '/about' ? 'active-item' : '';
        const projectsClass =
            location.pathname === '/projects' ? 'active-item' : '';
        const skillsClass =
            location.pathname === '/skills' ? 'active-item' : '';
        const contactClass =
            location.pathname === '/contact' ? 'active-item' : '';


        return (
            <Menu
                right
                customBurgerIcon={< img className="burger-icon-custom " alt="Menu Button" src={menubtn} />}
                customCrossIcon={< img className="cross-custom-icon" alt="Cros Button" src={crossbtn} />}

            >
                {/* We don't want to use <a> tag as it reload the page */}
                {/* <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a> */}

                <Link to='/' className={`menu-item ${homeClass}`}>
                    Home
                </Link>
                <Link to='/about' className={`menu-item ${aboutClass}`}>
                    About &#38; Achievements
                </Link>
                <Link to='/projects' className={`menu-item ${projectsClass}`}>
                    Projects
                </Link>
                <Link to='/skills' className={`menu-item ${skillsClass}`}>
                    Skills
                </Link>
                <Link to='/contact' className={`menu-item ${contactClass}`}>
                    Contact
                </Link>
            </Menu >
        );
    }
}

export default withRouter(NavBar);