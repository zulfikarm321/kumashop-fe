import { features } from '@/libs/data';

function FeaturesList() {
    return (
        <div className="features-list">
            {features.map((feature) => (
                <div className="feature-card" key={feature.title}>
                    <img src={feature.image} alt={feature.title} />
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    );
}

export default FeaturesList;
