import React from 'react'; 
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import ProductDetailsMain from '../../features/product-details/ProductDetailsMain';
import ProductDescription from '../../features/product-details/ProductDescription'; 
import ProductCarousel from '../../features/product-details/ProductCarousel';
const ProductDetails: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Product Details' />
            <ProductDetailsMain />
            <ProductDescription />
            <ProductCarousel />
        </>
    );
};

export default ProductDetails;