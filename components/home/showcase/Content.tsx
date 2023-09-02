import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

function Content({ header, description, colors }: any) {
    return (
        <div className="content">
            <h3 className="section-header">{header}</h3>
            <p className="text-gray">{description}</p>
            <div className="colors">
                <h4 className="text-primary">Color Choice</h4>

                <Image src={colors} alt="colors" />
            </div>

            <Button type="secondary">View All Products</Button>
        </div>
    );
}

export default Content;
