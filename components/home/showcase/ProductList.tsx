import Button from '@/components/Button';

function ProductList({ products }: any) {
    return (
        <div className="product-list">
            {products.map((product: any) => (
                <div className="box product-card">
                    <div className="product-image">
                        <img src={product.productImage} alt={product.name} />
                        <img src="/love.png" alt="love icon" className="love" />
                    </div>
                    <div className="product-desc">
                        <h4 className="text-primary">{product.name}</h4>
                        <div className="price-wrapper">
                            <p className="text-primary price">
                                {product.price}
                            </p>
                            {product.discountPrice && (
                                <p className="discount text-gray">
                                    {product.discountPrice}
                                </p>
                            )}
                        </div>
                    </div>
                    <img
                        className="colors"
                        src={product.colorsImage}
                        alt="colors"
                    />
                    <Button type="primary">Add to Cart</Button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
