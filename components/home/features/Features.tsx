import '@/styles/home/features.scss';

function Features() {
    return (
        <section className="container">
            <div className="features">
                <div className="features-header">
                    <h3 className="text-primary">
                        Welcome to our e-commerce site, the best place to
                        fulfill all your shopping needs!
                    </h3>
                    <p className="text-gray">
                        We offer six excellent features that make our service
                        the right choice for buying all kinds of products
                    </p>
                </div>
                <div className="features-list"></div>
            </div>
        </section>
    );
}

export default Features;
