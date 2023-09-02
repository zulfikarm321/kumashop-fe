import '@/styles/home/reviews.scss';
import { reviewsData } from '@/libs/data';
import Stars from '@/public/stars.png';
import Image from 'next/image';

function Reviews() {
    return (
        <section className="reviews container">
            <div className="reviews-header">
                <h3 className="section-header">
                    Making the Right Decision: Trusted Product Reviews
                </h3>
                <p className="text-gray">
                    We offer six excellent features that make our service the
                    right choice for buying all kinds of products
                </p>
            </div>
            <div className="reviews-list">
                {reviewsData.map((data, index) => (
                    <div className="review-card box" key={index}>
                        <p className="text-primary">{data.review}</p>
                        <Image
                            src={Stars}
                            alt="stars icon"
                            className="stars-icon"
                        />
                        <div className="user">
                            <Image
                                src={data.userImage}
                                alt={data.userName}
                                className="avatar"
                                width={50}
                                height={50}
                            />
                            <h4 className="text-primary">{data.userName}</h4>
                            <span className="text-gray">{data.userJob}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
