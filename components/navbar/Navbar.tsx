import '@/styles/navbar.scss';

import Logo from './Logo';
import NavLinks from './NavLinks';
import Button from '../Button';

function Navbar() {
    return (
        <nav>
            <div className="inner container">
                <Logo />
                <NavLinks />
                <Button type="primary">Register</Button>
            </div>
        </nav>
    );
}

export default Navbar;
