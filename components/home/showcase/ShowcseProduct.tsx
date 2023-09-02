import React from 'react';
import ProductList from './ProductList';
import Content from './Content';

function ShowcseProduct({ colors, products, header, description }: any) {
    return (
        <div className="showcase-product">
            <Content
                colors={colors}
                header={header}
                description={description}
            />
            <ProductList products={products} />
        </div>
    );
}

export default ShowcseProduct;
