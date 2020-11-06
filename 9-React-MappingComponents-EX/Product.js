
import React from "react";

//pass whole products object down as a property
//display as current string with toLocaleString()method
function Product(props) { 
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                - {props.product.description}</p>
        </div>
        
    )
}

export default Product;