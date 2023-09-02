import '@/styles/home/showcase.scss';

import ColorFashion from '@/public/colors-fashion.png';
import ColorElectronics from '@/public/colors-electronics.png';

import { productShowcaseElectonics, productShowcaseFashion } from '@/libs/data';
import ShowcseProduct from './ShowcseProduct';

function Showcase() {
    return (
        <section className="showcase container">
            <ShowcseProduct
                header="Stay on top of your fashion game with Kumashop"
                description="We offer a wide range of clothing, shoes, and accessories for men, women, and kids. From everyday basics to statement pieces, our collection has something for every occasion"
                products={productShowcaseFashion}
                colors={ColorFashion}
            />
            <ShowcseProduct
                header="Upgrade your tech game with Kumashop's range of electronics"
                description="We offer the latest gadgets and appliances, from smartphones to laptops, from smart home devices to gaming consoles. Our products are designed to simplify your life and keep you connected"
                products={productShowcaseElectonics}
                colors={ColorElectronics}
            />
        </section>
    );
}

export default Showcase;
