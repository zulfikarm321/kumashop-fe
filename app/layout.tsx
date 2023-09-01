import Navbar from '@/components/navbar/Navbar';
import '@/styles/globals.scss';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '800'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Kumashop',
    description: 'Generated by create next app'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
