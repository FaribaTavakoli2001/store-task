import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../context/ProductContextProvider';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProductsDitails = (props) => {
    
    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[ id - 1];
    const {image , title , description , price , category} = product;
    return (
        <div>
            <img src={image} alt='product'/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>
                    <span>{category}</span>
                </p>
            </div>
            <div>
                <span>{price} $</span>
                <br/>
                <Link to='/products'>back to shap</Link>
            </div>

        </div>
    );
};

export default ProductsDitails;