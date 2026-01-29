import React from 'react'; 
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import ProductsMain from '../../features/products/ProductsMain';

const Products: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Products' />
            <ProductsMain />
        </>
    );
};

export default Products;