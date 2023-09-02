import Features from '@/components/home/features/Features';
import Header from '@/components/home/header/Header';
import Reviews from '@/components/home/reviews/Reviews';
import Showcase from '@/components/home/showcase/Showcase';

export default function Home() {
    return (
        <main>
            <Header />
            <Features />
            <Showcase />
            <Reviews />
        </main>
    );
}
