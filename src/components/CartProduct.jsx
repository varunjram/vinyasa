import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import React from 'react'

function CartProduct({product}) {

    const {_id, name, brand, description, price, categoryName, image_url, rating, strikePrice, off} =
    product || {}; 
    
    return (
    <article className='cart-product'>
        <div className='cart-product--image-box'>
            <img className='' src={ image_url} alt={name} />
        </div>
        <div className='cart-product--content-box'>
            <Tooltip target=".heading-text" />
            <h2 className='heading-text'  data-pr-tooltip={name}  data-pr-position="top" >{name}</h2>
            <div className="cart-product--content-box--price-details">
                <span className='price'>&#8377;{price}</span><span className='strikePrice'> &#8377;{strikePrice}</span>
                <p>{off}% OFF</p>
            </div>
            <div className="quantity">
                <p>Quantity: </p>
                <Button icon="bi bi-dash" rounded outlined className='w-2rem h-2rem'/>
                <input type="text"  className='inline-block ml-2 mr-2 w-2rem' />
                <Button icon="bi bi-plus" rounded outlined  className='w-2rem h-2rem'/>

            </div>
            <Button className='block w-full mb-3 border-noround' >Remove From Cart</Button>
            <Button className='block w-full border-noround' >Move TO WishList </Button>
        </div>
    </article>
  )
}

export default CartProduct