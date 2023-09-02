import '@/styles/home/features.scss';

import FeaturesHead from './FeaturesHead';
import FeaturesList from './FeaturesList';

function Features() {
    return (
        <section className="container">
            <div className="features">
                <FeaturesHead />
                <FeaturesList />
            </div>
        </section>
    );
}

export default Features;
