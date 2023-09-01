import '@/styles/header.scss';

import Image from 'next/image';

import BgHero from '@/public/bg-hero.png';
import HeaderText from './HeaderText';
import DownloadBox from './DownloadBox';

function Header() {
    return (
        <header className="container">
            <div className="inner">
                <div className="header-content">
                    <HeaderText />
                    <DownloadBox />
                </div>
                <div className="header-image">
                    <Image
                        src={BgHero}
                        alt="background header"
                        width={760}
                        height={600}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
