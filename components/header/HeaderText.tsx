import Button from '../Button';
import Image from 'next/image';
import Play from '@/public/icon-play.svg';

function HeaderText() {
    return (
        <div>
            <h3>Find the best products at affordable prices only here</h3>
            <p className="text-gray">
                Take a moment and discover the magic on our site
            </p>
            <div className="cta">
                <Button type="secondary">Get Started</Button>
                <Button type="default">
                    <Image src={Play} alt="aple icon" width={45} height={45} />
                    How It Works
                </Button>
            </div>
        </div>
    );
}

export default HeaderText;
