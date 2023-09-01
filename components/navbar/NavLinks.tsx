import Link from 'next/link';

function NavLinks() {
    return (
        <div className="nav-links text-primary">
            <Link href={'/categories'}>Categories</Link>
            <Link href={'/best-offers'}>Best Offers</Link>
            <Link href={'/sell-with-us'}>Sell With Us</Link>
            <Link href={'/track-order'}>Track Order</Link>
            <Link href={'/contact-us'}>Contact Us</Link>
        </div>
    );
}

export default NavLinks;
