import '@/styles/header.scss';

import Button from '../Button';
import Image from 'next/image';

import BgHero from '@/public/bg-hero.png';
import AppleIcon from '@/public/icon-apple.svg';
import GooglePlay from '@/public/icon-google-play.svg';
import Play from '@/public/icon-play.svg';

function Header() {
    return (
        <header className="container">
            <div className="inner">
                <div className="header-content">
                    <h3>
                        Find the best products at affordable prices only here
                    </h3>
                    <p className="text-gray">
                        Take a moment and discover the magic on our site
                    </p>
                    <div className="cta">
                        <Button type="secondary">Get Started</Button>
                        <Button type="default">
                            <Image
                                src={Play}
                                alt="aple icon"
                                width={45}
                                height={45}
                            />
                            How It Works
                        </Button>
                    </div>

                    <div className="box download-buttons">
                        <div className="legend text-primary">
                            Available for download
                        </div>
                        <div className="buttons">
                            <Button type="primary">
                                <Image
                                    src={AppleIcon}
                                    alt="aple icon"
                                    width={24}
                                    height={24}
                                />
                                App Store
                            </Button>
                            <Button type="primary">
                                <Image
                                    src={GooglePlay}
                                    alt="google play icon"
                                    width={16}
                                    height={16}
                                />
                                Play Store
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="header-image">
                    <Image
                        src={BgHero}
                        alt="background header"
                        width={760}
                        height={670}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
