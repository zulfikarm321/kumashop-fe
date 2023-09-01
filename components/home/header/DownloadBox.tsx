import Button from '../../Button';
import Image from 'next/image';
import AppleIcon from '@/public/icon-apple.svg';
import GooglePlay from '@/public/icon-google-play.svg';

function DownloadBox() {
    return (
        <div className="box download-buttons">
            <div className="legend text-primary">Available for download</div>
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
    );
}

export default DownloadBox;
